import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"

const CONTACT_EMAIL = "mail@zaurb.com"

const ContactPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "someone"}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <div className="container max-w-2xl space-y-8">
      <h1 className="font-serif text-4xl font-normal tracking-header">Get in Touch</h1>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5" />
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
            {CONTACT_EMAIL}
          </a>
        </div>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name">Name</label>
            <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <Input id="email" type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message">Message</label>
            <Textarea id="message" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
