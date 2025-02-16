import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'

// In a real app, these would be stored securely, not hardcoded
const PROJECT_PASSWORD = import.meta.env.VITE_PROJECT_PASSWORD
const PASSWORD_EXPIRY_HOURS = 24 // Password expires after 24 hours

interface StoredPassword {
  value: string
  expires: number
}

interface PasswordProtectionProps {
  onUnlock: () => void
}

export function PasswordProtection({ onUnlock }: PasswordProtectionProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [savedPassword, setSavedPassword] = useState<string | null>(null)

  useEffect(() => {
    // Check if password is saved and not expired
    const storedData = localStorage.getItem('project_password')
    if (storedData) {
      try {
        const stored: StoredPassword = JSON.parse(storedData)
        const now = new Date().getTime()
        
        if (now < stored.expires) {
          setSavedPassword(stored.value)
          if (stored.value === PROJECT_PASSWORD) {
            onUnlock()
          }
        } else {
          // Password expired, remove it
          localStorage.removeItem('project_password')
        }
      } catch (e) {
        // Invalid stored data, remove it
        localStorage.removeItem('project_password')
      }
    }
  }, [onUnlock])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === PROJECT_PASSWORD) {
      // Store password with expiration time
      const now = new Date().getTime()
      const expires = now + (PASSWORD_EXPIRY_HOURS * 60 * 60 * 1000) // Convert hours to milliseconds
      
      const storedData: StoredPassword = {
        value: password,
        expires
      }
      
      localStorage.setItem('project_password', JSON.stringify(storedData))
      setError(false)
      onUnlock()
    } else {
      setError(true)
      setPassword('')
    }
  }

  if (savedPassword === PROJECT_PASSWORD) {
    return null
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
          <br />
          <span className="text-sm">Access expires after {PASSWORD_EXPIRY_HOURS} hours.</span>
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
        <Button type="submit" className="w-full">
          Unlock Project
        </Button>
      </form>
    </motion.div>
  )
}
