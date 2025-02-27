import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createAccessRequest } from '@/lib/auth'
import { sendAccessRequestEmail } from '@/lib/email-service'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

interface RequestAccessFormProps {
  projectId: string
  onCancel: () => void
}

export function RequestAccessForm({ projectId, onCancel }: RequestAccessFormProps) {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Basic email validation
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isValidEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      })
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Create local request
      const request = createAccessRequest(projectId, email, message)
      
      // Send email notification
      const emailSent = await sendAccessRequestEmail(projectId, email, message)
      
      // Reset form
      setEmail('')
      setMessage('')
      
      // Show success message
      toast({
        title: "Request Sent",
        description: emailSent 
          ? "Your access request has been submitted and an email notification has been sent."
          : "Your access request has been submitted. Email notification could not be sent.",
      })
      
      // Close the form
      onCancel()
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
          <Mail className="w-8 h-8 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-bold text-center">Request Access</h2>
        <p className="text-muted-foreground text-center max-w-sm mx-auto">
          This project is password protected. Fill out this form to request access from the portfolio owner.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message (Optional)
          </label>
          <Textarea
            id="message"
            placeholder="Briefly explain why you're requesting access..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          />
        </div>
        
        <div className="flex gap-3">
          <Button 
            type="submit" 
            className="flex-1"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Request'}
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        </div>
      </form>
    </motion.div>
  )
}
