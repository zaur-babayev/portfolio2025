import { cn } from "@/lib/utils"

interface RecordProps {
  title: string
  coverUrl: string
  artist: string
  className?: string
  link?: string
}

export function Record({ title, coverUrl, artist, className, link }: RecordProps) {
  const content = (
    <>
      <div className="record">
        <div className="vinyl" />
        <div className="record-cover">
          <div 
            className="cover-art" 
            style={{ 
              backgroundImage: `url(${coverUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} 
          />
        </div>
      </div>
      <div className="record-info mt-4 text-center">
        <h3 className="font-medium text-sm">{title}</h3>
        <p className="text-sm text-muted-foreground">{artist}</p>
      </div>
    </>
  )

  return (
    <div className={cn("record-container", className)}>
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
