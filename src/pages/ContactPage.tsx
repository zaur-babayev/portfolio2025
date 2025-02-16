import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"

const ContactPage = () => {
  return (
    <div className="container max-w-2xl space-y-8">
      <h1 className="font-serif text-4xl font-normal tracking-header">Get in Touch</h1>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5" />
          <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
            your.email@example.com
          </a>
        </div>
        
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name">Name</label>
            <Input id="name" placeholder="Your name" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <Input id="email" type="email" placeholder="Your email" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message">Message</label>
            <Textarea id="message" placeholder="Your message" />
          </div>
          
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
