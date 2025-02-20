import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Timeline } from "@/components/Timeline";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  H2,
  SectionLabel,
  SectionDescription,
  SectionHeader,
} from "@/components/ui/typography";
import { Book } from "@/components/ui/book";
import { Record } from "@/components/ui/record";
import Socials from "@/components/Socials";
import "@/styles/book.css";
import "@/styles/record.css";
import { useState } from "react";
import { profileAsciiArt } from "@/data/ascii-art";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EXPERIENCE = [
  {
    date: "2023 - Present",
    title: "Product Designer",
    subtitle: "Salv Technologies OÜ • Tallinn, Estonia",
    description:
      "Leading product design for the AML Platform product which includes Screening, Monitoring and Risk modules. Actively involved in product design ops and design system development.",
  },
  {
    date: "2021 - 2023",
    title: "Product Designer",
    subtitle: "Testlio OÜ • Tallinn, Estonia",
    description:
      "Was responsible for internal platform experience serving numerous internal teams and 10,000 freelance testers. Product designer for deprecation efforts of the older platform version.",
  },
  {
    date: "2020 - 2021",
    title: "UX Specialist",
    subtitle: "PASHA Insurance OJSC • Baku, Azerbaijan",
    description:
      "Worked in a team that is designing a new iterative ERP platform in an Agile environment serving 600 employees. Designed new Claims and Agent Platform focused on decreasing claims handling time.",
  },
  {
    date: "2019 - 2020",
    title: "Internal Communication Assistant -> Specialist",
    subtitle: "PASHA Insurance OJSC • Baku, Azerbaijan",
    description:
      "Redesigned and developed internal Idea Tracking Center platform. 30% increase in idea submission rate over 2 quarters. Worked on an Internal Loyalty Platform covering about 5000 employees and 5 companies. My main role was to establish brand language and assist with user experience.",
  },
] as const;

const EDUCATION = [
  {
    date: "Planned graduation 2028",
    title: "PhD candidate in Design",
    subtitle: "Faculty of Art and Design, Estonian Academy of Arts • Tallinn, Estonia",
    description:
      "",
  },
  {
    date: "",
    title: "Bachelor's and Master’s in Architecture",
    subtitle: "University of Architecture & Construction • Baku, Azerbaijan",
    description:
      "",
  },
] as const;

export function AboutPage() {
  const [showAscii, setShowAscii] = useState(false);

  return (
    <PageTransition>
      <motion.div className="space-y-24">
        {/* Header */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            label="About"
            title="Hey, my name is Zaur [/zaˈooɾ/]"
            description="I'm a product designer and design researcher who loves creating / improving things and other people's lives. My main focus at the moment is in Fintech and Digital Well-being."
          />
        </motion.div>

        {/* Profile Image */}
        <motion.section
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div 
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted sm:aspect-[3/2] lg:aspect-[2/1] cursor-pointer" 
            onClick={() => setShowAscii(!showAscii)}
          >
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-background/0" />
            {showAscii && (
              <div className="absolute inset-0 bg-background/95 flex items-center justify-center">
                <pre className="text-[0.25rem] sm:text-[0.45rem] md:text-[0.5rem] font-mono whitespace-pre leading-[1.15] text-foreground max-h-full w-full scale-[0.85] sm:scale-90">
                  {profileAsciiArt}
                </pre>
              </div>
            )}
          </div>
        </motion.section>

        {/* Personal Story */}
        <motion.section
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="prose prose-gray max-w-none leading-relaxed text-muted-foreground">
            <p>
            Design is part of my life every day, everywhere, it’s just how I think and see the world. But it wasn’t always clear what I wanted to do. It’s still not super clear, but I know a few main pillars that guide me.
            </p>
            <br />
            <p>
            I started out in Architecture, studied up to a master’s level, but then realized I wanted something different. Design, human behavior, and technology naturally led me to product design. I’ve spent the past years working in SaaS platforms and fintech, focusing on complex systems, user interactions, and problem-solving at scale. It’s something I still do and enjoy. In parallel, I got more interested in therapy, mental health, and well-being, and that’s what I’m focusing on now in my PhD.
            </p>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            <SectionLabel>Experience</SectionLabel>
            <H2>Professional Journey</H2>
          </div>
          <Timeline items={[...EXPERIENCE]} />
          <div className="flex items-center pt-4">
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            <SectionLabel>Education</SectionLabel>
            <H2>Academic Background</H2>
          </div>
          <Timeline items={[...EDUCATION]} />
        </motion.section>

        {/* Books */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <SectionHeader
            label="Reading List"
            title="Recent books I've read"
            description="Trying to squeeze in some reading time during the day. Kindle has been a game-changer for this."
          />
          <div className="hidden md:grid grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-4">
            <Book
              title="Hard Rain Falling"
              coverUrl="https://ia600202.us.archive.org/view_archive.php?archive=/5/items/olcovers630/olcovers630-L.zip&file=6305862-L.jpg"
              author="Don Carpenter"
              link="https://www.goodreads.com/book/show/6553843-hard-rain-falling"
            />
            <Book
              title="The Stranger"
              coverUrl="https://covers.openlibrary.org/b/id/14814329-L.jpg"
              author="Albert Camus"
              link="https://www.goodreads.com/book/show/49552.The_Stranger"
            />
            <Book
              title="User Friendly"
              coverUrl="https://ia600404.us.archive.org/view_archive.php?archive=/33/items/l_covers_0010/l_covers_0010_17.zip&file=0010174106-L.jpg"
              author="Cliff Kuang"
              link="https://www.goodreads.com/book/show/41940285-user-friendly"
            />
            <Book
              title="Neuromancer"
              coverUrl="https://ia802309.us.archive.org/view_archive.php?archive=/20/items/l_covers_0008/l_covers_0008_90.zip&file=0008904053-L.jpg"
              author="William Gibson"
              link="https://www.goodreads.com/book/show/6088007-neuromancer"
            />
          </div>
          <div className="md:hidden w-full relative px-0">
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-1 flex items-center">
                <CarouselItem className="pl-1 basis-[95%] flex items-center justify-center">
                  <Book
                    title="Hard Rain Falling"
                    coverUrl="https://ia600202.us.archive.org/view_archive.php?archive=/5/items/olcovers630/olcovers630-L.zip&file=6305862-L.jpg"
                    author="Don Carpenter"
                    link="https://www.goodreads.com/book/show/6553843-hard-rain-falling"
                  />
                </CarouselItem>
                <CarouselItem className="pl-1 basis-[95%] flex items-center justify-center">
                  <Book
                    title="The Stranger"
                    coverUrl="https://covers.openlibrary.org/b/id/14814329-L.jpg"
                    author="Albert Camus"
                    link="https://www.goodreads.com/book/show/49552.The_Stranger"
                  />
                </CarouselItem>
                <CarouselItem className="pl-1 basis-[95%] flex items-center justify-center">
                  <Book
                    title="User Friendly"
                    coverUrl="https://ia600404.us.archive.org/view_archive.php?archive=/33/items/l_covers_0010/l_covers_0010_17.zip&file=0010174106-L.jpg"
                    author="Cliff Kuang"
                    link="https://www.goodreads.com/book/show/41940285-user-friendly"
                  />
                </CarouselItem>
                <CarouselItem className="pl-1 basis-[95%] flex items-center justify-center">
                  <Book
                    title="Neuromancer"
                    coverUrl="https://ia802309.us.archive.org/view_archive.php?archive=/20/items/l_covers_0008/l_covers_0008_90.zip&file=0008904053-L.jpg"
                    author="William Gibson"
                    link="https://www.goodreads.com/book/show/6088007-neuromancer"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute -left-2 hover:bg-background/80 hover:text-foreground z-20" />
              <CarouselNext className="absolute -right-2 hover:bg-background/80 hover:text-foreground z-20" />
            </Carousel>
          </div>
        </motion.section>

        {/* Records Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8 mt-24"
        >
          <SectionHeader
            label="Music Collection"
            title="Albums I've been enjoying lately"
            description="I always listen to music while working. These are the albums that have been helping me get into the flow."
          />
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 items-center justify-items-center gap-8">
            <Record
              title="Romance"
              artist="Fontaines D.C."
              coverUrl="https://i.discogs.com/R9FyWMod4CmVozI5xWbVqbAHCQFl-Wd5PDsoy3oUxKk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNTQx/MDM4LTE3MjY2ODM5/NDUtNjAyMi5qcGVn.jpeg"
              link="https://fontainesdc.bandcamp.com/album/romance"
            />
            <Record
              title="Dummy"
              artist="Portishead"
              coverUrl="https://i.discogs.com/42s0M3miRlGBRZYei2eVcwGQRXu-KlfaRn348rqIgIA/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4MTIx/Ni0xMTM0MjE2MTY2/LmpwZWc.jpeg"
              link="https://www.discogs.com/master/5542-Portishead-Dummy"
            />
            <Record
              title="My Method Actor"
              artist="Nilüfer Yanya"
              coverUrl="https://i.discogs.com/iS8FEGDI8DuWdQ5qu9P9p9hLpALlerNkRRzIoQKgThI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNzA1/NzY5LTE3MjYwMjY2/MDAtNzA4Ni5qcGVn.jpeg"
              link="https://niluferyanya.bandcamp.com/album/my-method-actor"
            />
            <Record
              title="In Rainbows"
              artist="Radiohead"
              coverUrl="https://i.discogs.com/7y0jjFTZp88uBO380fsYcO36I3ex_er3lZn8COq90Vc/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNzQy/OTYtMTY5NzMyNzQ3/Ny0yMzQ1LmpwZWc.jpeg"
              link="https://radiohead.bandcamp.com/album/in-rainbows"
            />
          </div>
          <div className="md:hidden w-full relative px-0">
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-1 flex items-center">
                <CarouselItem className="pl-1 basis-[95%] flex items-center justify-center">
                  <Record
                    title="Romance"
                    artist="Fontaines D.C."
                    coverUrl="https://i.discogs.com/R9FyWMod4CmVozI5xWbVqbAHCQFl-Wd5PDsoy3oUxKk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNTQx/MDM4LTE3MjY2ODM5/NDUtNjAyMi5qcGVn.jpeg"
                    link="https://fontainesdc.bandcamp.com/album/romance"
                  />
                </CarouselItem>
                <CarouselItem className="pl-1 basis-[95%] flex items-center justify-center">
                  <Record
                    title="Dummy"
                    artist="Portishead"
                    coverUrl="https://i.discogs.com/42s0M3miRlGBRZYei2eVcwGQRXu-KlfaRn348rqIgIA/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4MTIx/Ni0xMTM0MjE2MTY2/LmpwZWc.jpeg"
                    link="https://www.discogs.com/master/5542-Portishead-Dummy"
                  />
                </CarouselItem>
                <CarouselItem className="pl-1 basis-[95%] flex items-center justify-center">
                  <Record
                    title="My Method Actor"
                    artist="Nilüfer Yanya"
                    coverUrl="https://i.discogs.com/iS8FEGDI8DuWdQ5qu9P9p9hLpALlerNkRRzIoQKgThI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNzA1/NzY5LTE3MjYwMjY2/MDAtNzA4Ni5qcGVn.jpeg"
                    link="https://niluferyanya.bandcamp.com/album/my-method-actor"
                  />
                </CarouselItem>
                <CarouselItem className="pl-1 basis-[95%] flex items-center justify-center">
                  <Record
                    title="In Rainbows"
                    artist="Radiohead"
                    coverUrl="https://i.discogs.com/7y0jjFTZp88uBO380fsYcO36I3ex_er3lZn8COq90Vc/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNzQy/OTYtMTY5NzMyNzQ3/Ny0yMzQ1LmpwZWc.jpeg"
                    link="https://radiohead.bandcamp.com/album/in-rainbows"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute -left-2 hover:bg-background/80 hover:text-foreground z-20" />
              <CarouselNext className="absolute -right-2 hover:bg-background/80 hover:text-foreground z-20" />
            </Carousel>
          </div>
        </motion.div>
      </motion.div>
    </PageTransition>
  );
}

export default AboutPage;
