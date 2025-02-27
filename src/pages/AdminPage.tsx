import { useState, useEffect } from 'react'
import { PageTransition } from '@/components/PageTransition'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  getStoredRequests, 
  getStoredTokens, 
  approveAccessRequest, 
  rejectAccessRequest, 
  cleanupExpiredTokens,
  AccessRequest,
  AccessToken
} from '@/lib/auth'
import { sendAccessApprovalEmail } from '@/lib/email-service'
import { toast } from '@/hooks/use-toast'
import { motion } from 'framer-motion'
import { 
  Check, 
  X, 
  Clock, 
  Mail, 
  Shield, 
  Key, 
  Trash, 
  Copy,
  RefreshCw
} from 'lucide-react'
import { getProjectBySlug, getAllProjects } from '@/data/portfolio/projects'

export default function AdminPage() {
  const [adminPassword, setAdminPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [requests, setRequests] = useState<AccessRequest[]>([])
  const [tokens, setTokens] = useState<AccessToken[]>([])
  const [refreshKey, setRefreshKey] = useState(0)
  
  // Check if authenticated in localStorage
  useEffect(() => {
    const isAdmin = localStorage.getItem('portfolio_admin') === 'true'
    if (isAdmin) {
      setIsAuthenticated(true)
    }
    
    // Clean up expired tokens
    cleanupExpiredTokens()
  }, [])
  
  // Load requests and tokens when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      setRequests(getStoredRequests())
      setTokens(getStoredTokens())
    }
  }, [isAuthenticated, refreshKey])
  
  // Handle admin login
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // In a real app, this would be a secure authentication process
    // For demo purposes, we're using a simple password check
    if (adminPassword === import.meta.env.VITE_PROJECT_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem('portfolio_admin', 'true')
      toast({
        title: "Admin Access Granted",
        description: "You now have access to the admin panel.",
      })
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect admin password.",
        variant: "destructive"
      })
    }
    
    setAdminPassword('')
  }
  
  // Handle request approval
  const handleApproveRequest = async (requestId: string) => {
    const token = approveAccessRequest(requestId)
    if (token) {
      // Create access URL
      const request = getStoredRequests().find(r => r.id === requestId);
      const accessUrl = `${window.location.origin}/work/${token.projectId}?access_token=${token.value}`;
      
      // Copy to clipboard
      navigator.clipboard.writeText(accessUrl);
      
      // Send email if email is available
      let emailSent = false;
      if (request?.email) {
        emailSent = await sendAccessApprovalEmail(token.projectId, request.email, token.value);
      }
      
      toast({
        title: "Request Approved",
        description: emailSent 
          ? "Access granted and email sent to requester with access link."
          : "Access granted. Access link copied to clipboard (no email sent).",
      });
      
      // Refresh the lists
      setRefreshKey(prev => prev + 1);
    } else {
      toast({
        title: "Error",
        description: "Could not approve the request. Please try again.",
        variant: "destructive"
      });
    }
  }
  
  // Handle request rejection
  const handleRejectRequest = (requestId: string) => {
    const success = rejectAccessRequest(requestId)
    if (success) {
      toast({
        title: "Request Rejected",
        description: "The access request has been rejected.",
      })
      
      // Refresh the lists
      setRefreshKey(prev => prev + 1)
    }
  }
  
  // Format date
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString()
  }
  
  // Get project title from slug
  const getProjectTitle = (slug: string) => {
    const project = getProjectBySlug(slug)
    return project ? project.title : slug
  }
  
  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('portfolio_admin')
  }
  
  // Refresh data
  const handleRefresh = () => {
    cleanupExpiredTokens()
    setRefreshKey(prev => prev + 1)
    toast({
      title: "Data Refreshed",
      description: "The access requests and tokens have been refreshed.",
    })
  }
  
  if (!isAuthenticated) {
    return (
      <PageTransition>
        <div className="min-h-[70vh] flex flex-col items-center justify-center py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-muted-foreground" />
              </div>
              <h1 className="text-2xl font-bold">Admin Access</h1>
              <p className="text-muted-foreground">
                Enter your admin password to access the admin panel.
              </p>
            </div>
            
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Admin Password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                Access Admin Panel
              </Button>
            </form>
          </motion.div>
        </div>
      </PageTransition>
    )
  }
  
  return (
    <PageTransition>
      <div className="py-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif tracking-header">Admin Panel</h1>
            <p className="text-muted-foreground mt-2">
              Manage access requests and tokens for your protected projects.
            </p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleRefresh}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
        
        {/* Access Requests Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-serif tracking-header flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Access Requests
          </h2>
          
          {requests.length === 0 ? (
            <p className="text-muted-foreground py-4">No access requests found.</p>
          ) : (
            <div className="border rounded-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Project</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {requests.map((request) => (
                    <tr key={request.id} className="hover:bg-muted/50">
                      <td className="px-4 py-3 text-sm">{request.email}</td>
                      <td className="px-4 py-3 text-sm">{getProjectTitle(request.projectId)}</td>
                      <td className="px-4 py-3 text-sm">{formatDate(request.timestamp)}</td>
                      <td className="px-4 py-3 text-sm">
                        {request.status === 'pending' && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                            <Clock className="w-3 h-3 mr-1" />
                            Pending
                          </span>
                        )}
                        {request.status === 'approved' && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            <Check className="w-3 h-3 mr-1" />
                            Approved
                          </span>
                        )}
                        {request.status === 'rejected' && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                            <X className="w-3 h-3 mr-1" />
                            Rejected
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        {request.status === 'pending' && (
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="h-8 px-2 text-green-600 hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-900/20"
                              onClick={() => handleApproveRequest(request.id)}
                            >
                              <Check className="w-4 h-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="h-8 px-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                              onClick={() => handleRejectRequest(request.id)}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        )}
                        {request.status !== 'pending' && (
                          <span className="text-muted-foreground italic text-xs">
                            {request.status === 'approved' ? 'Approved' : 'Rejected'}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
        
        {/* Active Tokens Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-serif tracking-header flex items-center gap-2">
            <Key className="w-5 h-5" />
            Active Access Tokens
          </h2>
          
          {tokens.length === 0 ? (
            <p className="text-muted-foreground py-4">No active access tokens found.</p>
          ) : (
            <div className="border rounded-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium">Project</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Token</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Expires</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {tokens.map((token) => (
                    <tr key={token.value} className="hover:bg-muted/50">
                      <td className="px-4 py-3 text-sm">{getProjectTitle(token.projectId)}</td>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-2 py-1 rounded text-xs">
                            {token.value.substring(0, 8)}...
                          </code>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="h-6 w-6 p-0"
                            onClick={() => {
                              navigator.clipboard.writeText(token.value);
                              toast({
                                title: "Copied",
                                description: "Token copied to clipboard",
                              });
                            }}
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        {formatDate(token.expires)}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="h-8 px-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                          onClick={() => {
                            // Remove token
                            const newTokens = tokens.filter(t => t.value !== token.value);
                            localStorage.setItem('project_access_tokens', JSON.stringify(newTokens));
                            setRefreshKey(prev => prev + 1);
                            toast({
                              title: "Token Revoked",
                              description: "The access token has been revoked.",
                            });
                          }}
                        >
                          <Trash className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </PageTransition>
  )
}
