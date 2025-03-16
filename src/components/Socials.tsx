import { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface SocialLink {
  name: string;
  url: string;
  isEmail?: boolean;
}

export default function Socials() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const socialLinks: SocialLink[] = [
    { name: 'Email', url: 'mail@zaurb.com', isEmail: true },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/zaurb/' },
    { name: 'GitHub', url: 'https://github.com/zaur-babayev/' },
    { name: 'Are.na', url: 'https://are.na/zaur-babayev' },
    { name: 'ETIS', url: 'https://www.etis.ee/CV/zaur_babayev/eng/' },
  ];

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(socialLinks[0].url);
      setCopied(true);
      toast({
        title: "Email copied!",
        description: "The email address has been copied to your clipboard.",
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
      toast({
        title: "Failed to copy",
        description: "Could not copy the email address. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-4 md:gap-6 items-center">
      {socialLinks.map((link) => (
        <div key={link.name} className="flex items-center">
          {link.isEmail ? (
            <button
              onClick={handleEmailClick}
              className="flex items-center hover:opacity-50 transition-opacity text-sm md:text-base"
            >
              {link.name}
              {copied ? (
                <Check className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              ) : (
                <Copy className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              )}
            </button>
          ) : (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-50 transition-opacity text-sm md:text-base"
            >
              {link.name}
              <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
