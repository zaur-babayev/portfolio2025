import { cn } from "@/lib/utils"

interface BookProps {
  title: string
  coverUrl: string
  author: string
  className?: string
  link?: string
}

export function Book({ title, coverUrl, author, className, link }: BookProps) {
  const content = (
    <>
      <div className="book">
        <div className="book-spine" />
        <div className="pages">
          <div className="page-edges" />
        </div>
        <div className="book-cover">
          <div 
            className="cover-art" 
            style={{ 
              backgroundImage: `url(${coverUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} 
          />
        </div>
        <div className="page">
          <div className="page-content" />
        </div>
        <div className="page">
          <div className="page-content" />
        </div>
        <div className="page">
          <div className="page-content" />
        </div>
      </div>
      <div className="record-info mt-6 text-center">
        <h3 className="font-medium text-sm">{title}</h3>
        <p className="text-sm text-muted-foreground">{author}</p>
      </div>
    </>
  )

  return (
    <div className={cn("choice", className)}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  )
}
