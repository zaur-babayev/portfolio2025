import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import { Lock, Timer, Key } from 'lucide-react'
import { RequestAccessForm } from './RequestAccessForm'
import { 
  createAccessToken, 
  validateAccessToken, 
  cleanupExpiredTokens, 
  getStoredTokens
} from '@/lib/auth'
import { toast } from '@/hooks/use-toast'

// Remove hardcoded password reference
const DEFAULT_EXPIRY_HOURS = 24 // Default expiry time in hours

interface PasswordProtectionProps {
  onUnlock: () => void
  projectId: string
}

export function PasswordProtection({ onUnlock, projectId }: PasswordProtectionProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [tokenValue, setTokenValue] = useState<string | null>(null)
  const [expiryHours, setExpiryHours] = useState(DEFAULT_EXPIRY_HOURS)
  const [showRequestForm, setShowRequestForm] = useState(false)
  const [isTokenExpired, setIsTokenExpired] = useState(false)

  useEffect(() => {
    // Clean up expired tokens on component mount
    cleanupExpiredTokens()
    
    // Check if there's a valid token for this project
    const urlParams = new URLSearchParams(window.location.search)
    const accessToken = urlParams.get('access_token')
    
    if (accessToken) {
      // If token is in URL, validate it
      if (validateAccessToken(projectId, accessToken)) {
        setTokenValue(accessToken)
        onUnlock()
        
        // Remove token from URL without reloading the page
        const newUrl = window.location.pathname
        window.history.replaceState({}, document.title, newUrl)
        
        toast({
          title: "Access Granted",
          description: "You've been granted temporary access to this project.",
        })
      } else {
        setIsTokenExpired(true)
        toast({
          title: "Access Denied",
          description: "The access token is invalid or has expired.",
          variant: "destructive"
        })
      }
    } else {
      // Check for existing valid tokens in localStorage
      const storedTokens = getStoredTokens()
      const now = new Date().getTime()
      
      // Find a valid token for this project
      const validToken = storedTokens.find(token => 
        token.projectId === projectId && 
        token.expires > now
      )
      
      if (validToken) {
        setTokenValue(validToken.value)
        onUnlock()
      }
    }
  }, [onUnlock, projectId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Validate password via the API endpoint
      const response = await fetch('/api/validate-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password,
          type: 'project'
        }),
      });
      
      const data = await response.json();
      
      if (data.valid) {
        // Create a new access token
        const token = createAccessToken(projectId, expiryHours)
        setTokenValue(token.value)
        setError(false)
        onUnlock()
        
        toast({
          title: "Access Granted",
          description: `You now have access to this project for ${expiryHours} hours.`,
        })
      } else {
        setError(true)
        toast({
          title: "Access Denied",
          description: "The password you entered is incorrect.",
          variant: "destructive"
        })
      }
    } catch (error) {
      console.error('Error validating password:', error);
      setError(true)
      toast({
        title: "Error",
        description: "There was a problem validating your password. Please try again.",
        variant: "destructive"
      })
    }
  }

  if (tokenValue && validateAccessToken(projectId, tokenValue)) {
    return null
  }
  
  if (showRequestForm) {
    return (
      <RequestAccessForm 
        projectId={projectId}
        onCancel={() => setShowRequestForm(false)}
      />
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-[50vh] flex flex-col items-center justify-center text-center space-y-8 py-12"
    >
      <div className="space-y-4">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
          <Lock className="w-8 h-8 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-bold">Password Protected</h2>
        <p className="text-muted-foreground max-w-sm">
          This project is password protected. Please enter the password to view it.
          {isTokenExpired && (
            <span className="block mt-2 text-destructive">
              Your previous access token has expired.
            </span>
          )}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={error ? 'border-destructive' : ''}
          />
          {error && (
            <p className="text-sm text-destructive">
              Incorrect password. Please try again.
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Timer className="w-4 h-4 text-muted-foreground" />
            <label htmlFor="expiry" className="text-sm text-muted-foreground">
              Access Duration
            </label>
          </div>
          <select
            id="expiry"
            value={expiryHours}
            onChange={(e) => setExpiryHours(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md bg-background"
          >
            <option value="1">1 hour</option>
            <option value="4">4 hours</option>
            <option value="24">24 hours</option>
            <option value="72">3 days</option>
            <option value="168">7 days</option>
          </select>
        </div>
        
        <Button type="submit" className="w-full">
          <Key className="w-4 h-4 mr-2" />
          Unlock Project
        </Button>
        
        <div className="pt-2">
          <Button 
            type="button" 
            variant="link" 
            className="text-sm"
            onClick={() => setShowRequestForm(true)}
          >
            Don't have the password? Request access
          </Button>
        </div>
      </form>
    </motion.div>
  )
}
