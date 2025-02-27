import { toast } from "@/hooks/use-toast"

// Interface for access tokens
export interface AccessToken {
  value: string
  expires: number
  projectId: string
  email?: string
}

// Interface for access requests
export interface AccessRequest {
  id: string
  email: string
  projectId: string
  message?: string
  timestamp: number
  status: 'pending' | 'approved' | 'rejected'
}

// Storage keys
const TOKEN_STORAGE_KEY = 'project_access_tokens'
const REQUEST_STORAGE_KEY = 'project_access_requests'

// Generate a secure random token
export function generateToken(length = 32): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let token = ''
  const randomValues = new Uint8Array(length)
  
  // Use crypto.getRandomValues for secure random generation if available
  if (window.crypto && window.crypto.getRandomValues) {
    window.crypto.getRandomValues(randomValues)
    for (let i = 0; i < length; i++) {
      token += characters.charAt(randomValues[i] % characters.length)
    }
  } else {
    // Fallback to less secure Math.random
    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length))
    }
  }
  
  return token
}

// Create a new access token for a project
export function createAccessToken(projectId: string, expiryHours = 24, email?: string): AccessToken {
  const token: AccessToken = {
    value: generateToken(),
    expires: new Date().getTime() + (expiryHours * 60 * 60 * 1000),
    projectId,
    email
  }
  
  // Store token in localStorage
  const storedTokens = getStoredTokens()
  storedTokens.push(token)
  localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(storedTokens))
  
  // Debug logging
  console.log(`Created new token for project ${projectId}:`, {
    tokenValue: token.value.substring(0, 5) + '...',
    expires: new Date(token.expires).toLocaleString(),
    expiryHours,
    tokensStored: storedTokens.length
  })
  
  return token
}

// Validate an access token
export function validateAccessToken(projectId: string, tokenValue?: string): boolean {
  if (!tokenValue) return false
  
  const storedTokens = getStoredTokens()
  const now = new Date().getTime()
  
  // Find valid token for this project
  const validToken = storedTokens.find(token => 
    token.projectId === projectId && 
    token.value === tokenValue && 
    token.expires > now
  )
  
  // Debug logging
  console.log(`Validating token for project ${projectId}:`, {
    tokenValue: tokenValue?.substring(0, 5) + '...',
    valid: !!validToken,
    tokensFound: storedTokens.length,
    now,
    expires: validToken?.expires
  })
  
  return !!validToken
}

// Get all stored tokens
export function getStoredTokens(): AccessToken[] {
  try {
    const storedData = localStorage.getItem(TOKEN_STORAGE_KEY)
    if (!storedData) return []
    
    const tokens: AccessToken[] = JSON.parse(storedData)
    return tokens
  } catch (e) {
    // Invalid stored data, clear it
    localStorage.removeItem(TOKEN_STORAGE_KEY)
    return []
  }
}

// Clean up expired tokens
export function cleanupExpiredTokens(): void {
  const storedTokens = getStoredTokens()
  const now = new Date().getTime()
  
  const validTokens = storedTokens.filter(token => token.expires > now)
  
  if (validTokens.length !== storedTokens.length) {
    localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(validTokens))
  }
}

// Create an access request
export function createAccessRequest(projectId: string, email: string, message?: string): AccessRequest {
  const request: AccessRequest = {
    id: generateToken(16),
    email,
    projectId,
    message,
    timestamp: new Date().getTime(),
    status: 'pending'
  }
  
  // Store request in localStorage
  const storedRequests = getStoredRequests()
  storedRequests.push(request)
  localStorage.setItem(REQUEST_STORAGE_KEY, JSON.stringify(storedRequests))
  
  // In a real app, you would send this request to a server or email
  // For demo purposes, we'll just show a toast notification
  toast({
    title: "Access Request Sent",
    description: `Your request for access to this project has been sent. You'll be notified when access is granted.`,
  })
  
  return request
}

// Get all stored access requests
export function getStoredRequests(): AccessRequest[] {
  try {
    const storedData = localStorage.getItem(REQUEST_STORAGE_KEY)
    if (!storedData) return []
    
    const requests: AccessRequest[] = JSON.parse(storedData)
    return requests
  } catch (e) {
    // Invalid stored data, clear it
    localStorage.removeItem(REQUEST_STORAGE_KEY)
    return []
  }
}

// Get pending requests for a project
export function getPendingRequests(projectId: string): AccessRequest[] {
  const requests = getStoredRequests()
  return requests.filter(req => req.projectId === projectId && req.status === 'pending')
}

// Approve an access request
export function approveAccessRequest(requestId: string, expiryHours = 24): AccessToken | null {
  const requests = getStoredRequests()
  const requestIndex = requests.findIndex(req => req.id === requestId)
  
  if (requestIndex === -1) return null
  
  const request = requests[requestIndex]
  request.status = 'approved'
  
  // Update request status
  requests[requestIndex] = request
  localStorage.setItem(REQUEST_STORAGE_KEY, JSON.stringify(requests))
  
  // Create a new access token
  return createAccessToken(request.projectId, expiryHours, request.email)
}

// Reject an access request
export function rejectAccessRequest(requestId: string): boolean {
  const requests = getStoredRequests()
  const requestIndex = requests.findIndex(req => req.id === requestId)
  
  if (requestIndex === -1) return false
  
  requests[requestIndex].status = 'rejected'
  localStorage.setItem(REQUEST_STORAGE_KEY, JSON.stringify(requests))
  
  return true
}
