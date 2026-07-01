import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Timeline } from "@/components/Timeline";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SectionDescription,
  SectionHeader,
} from "@/components/ui/typography";
import { Book } from "@/components/ui/book";
import { Record } from "@/components/ui/record";
import Socials from "@/components/Socials";
import "@/styles/book.css";
import "@/styles/record.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EXPERIENCE = [
    {
    date: "2026 - Present",
    title: "Senior Product Designer",
    subtitle: "Go & Grow (by Bondora Capital OÜ) • Tallinn, Estonia",
    description:
      "Leading design across Go & Grow’s core investment experience, owning end-to-end flows like onboarding, investing, and dashboards with a focus on clarity, trust, and long-term usability. Driving the Design System initiative across product teams, from structure and components to documentation and adoption. Setting the direction for accessibility, ensuring products meet EU requirements through guidelines, reviews, and hands-on implementation support, while mentoring designers and shaping design quality at the product level.",
  },
  {
    date: "2025 - 2026",
    title: "Product Designer",
    subtitle: "Bondora Capital OÜ • Tallinn, Estonia",
    description:
      "Focused on Bondora’s Go & Grow investment product. Working on core user flows such as onboarding, investing, and dashboards, with a focus on clarity, trust, and long-term usability. Leading the Design System initiative across product teams, including structure, components, and documentation. Driving accessibility work to ensure products meet EU accessibility requirements, supporting teams with guidelines, reviews, and practical implementation.",
  },
  {
    date: "2025 - Present",
    title: "Lecturer",
    subtitle: "Estonian Academy of Arts • Tallinn, Estonia",
    description:
      "Digital Portfolio Development, a Master’s-level course focused on helping students build a compelling portfolio to support applications for jobs, internships, PhD positions, volunteer work, and collaborations.",
  },
  {
    date: "2023 - 2025",
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
      "Responsible for the internal platform experience used by multiple internal teams and over 10,000 freelance testers. Led product design for the deprecation of the legacy platform.",
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
    title: "Internal Communication Specialist",
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

const BOOKS = [
  {
    title: "Hard Rain Falling",
    coverUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1682851327i/6553843.jpg",
    author: "Don Carpenter",
    link: "https://www.goodreads.com/book/show/6553843-hard-rain-falling",
  },
  {
    title: "Rejection",
    coverUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1757697215i/199635125.jpg",
    author: "Tony Tulathimutte",
    link: "https://www.goodreads.com/book/show/199635125-rejection?ref=nav_sb_ss_1_9",
  },
  {
    title: "User Friendly",
    coverUrl: "https://ia600404.us.archive.org/view_archive.php?archive=/33/items/l_covers_0010/l_covers_0010_17.zip&file=0010174106-L.jpg",
    author: "Cliff Kuang",
    link: "https://www.goodreads.com/book/show/41940285-user-friendly",
  },
  {
    title: "Neuromancer",
    coverUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1752514552i/6088007.jpg",
    author: "William Gibson",
    link: "https://www.goodreads.com/book/show/6088007-neuromancer",
  },
] as const;

const RECORDS = [
  {
    title: "Romance",
    artist: "Fontaines D.C.",
    coverUrl: "https://i.discogs.com/R9FyWMod4CmVozI5xWbVqbAHCQFl-Wd5PDsoy3oUxKk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNTQx/MDM4LTE3MjY2ODM5/NDUtNjAyMi5qcGVn.jpeg",
    link: "https://fontainesdc.bandcamp.com/album/romance",
  },
  {
    title: "Dummy",
    artist: "Portishead",
    coverUrl: "https://i.discogs.com/42s0M3miRlGBRZYei2eVcwGQRXu-KlfaRn348rqIgIA/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4MTIx/Ni0xMTM0MjE2MTY2/LmpwZWc.jpeg",
    link: "https://www.discogs.com/master/5542-Portishead-Dummy",
  },
  {
    title: "My Method Actor",
    artist: "Nilüfer Yanya",
    coverUrl: "https://i.discogs.com/iS8FEGDI8DuWdQ5qu9P9p9hLpALlerNkRRzIoQKgThI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNzA1/NzY5LTE3MjYwMjY2/MDAtNzA4Ni5qcGVn.jpeg",
    link: "https://niluferyanya.bandcamp.com/album/my-method-actor",
  },
  {
    title: "In Rainbows",
    artist: "Radiohead",
    coverUrl: "https://i.discogs.com/7y0jjFTZp88uBO380fsYcO36I3ex_er3lZn8COq90Vc/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNzQy/OTYtMTY5NzMyNzQ3/Ny0yMzQ1LmpwZWc.jpeg",
    link: "https://radiohead.bandcamp.com/album/in-rainbows",
  },
] as const;

export function AboutPage() {
  return (
    <PageTransition>
      <motion.div className="space-y-24">
        {/* Header */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-4xl md:text-6xl font-normal tracking-header leading-[1.05]">
            Well hi there, my name is Zaur{" "}
            <span className="block sm:inline text-2xl md:text-4xl text-muted-foreground/60 font-light">
              [/zaˈuɾ/]
            </span>
          </h1>
          <SectionDescription className="text-xl md:text-2xl leading-relaxed">
            I'm a product designer and design researcher who loves creating /
            improving things and other people's lives. My main focus at the
            moment is in Fintech and Digital Well-being.
          </SectionDescription>
        </motion.div>

        {/* Profile Image */}
        <motion.section
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted sm:aspect-[3/2] lg:aspect-[2/1]">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-background/0" />
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
          <SectionHeader title="Experience" />
          <Timeline items={[...EXPERIENCE]} />
          <div className="flex items-center pt-4">
            <Button variant="outline" size="lg" asChild className="group">
              <a href="/resume-Zaur_Babayev.pdf" download>
                <Download className="transition-transform group-hover:translate-y-0.5" />
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
          <SectionHeader title="Academic Background" />
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
            title="Recent books I've read"
            description="Trying to squeeze in some reading time during the day. Kindle has been a game-changer for this."
          />
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 items-center justify-items-center gap-8">
            {BOOKS.map((book, i) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Book {...book} />
              </motion.div>
            ))}
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
                {BOOKS.map((book) => (
                  <CarouselItem key={book.title} className="pl-1 basis-[95%] flex items-center justify-center">
                    <Book {...book} />
                  </CarouselItem>
                ))}
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
          className="space-y-8"
        >
          <SectionHeader
            title="Albums I've been enjoying lately"
            description="I always listen to music while working. These are the albums that have been helping me get into the flow."
          />
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 items-center justify-items-center gap-8">
            {RECORDS.map((record, i) => (
              <motion.div
                key={record.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Record {...record} />
              </motion.div>
            ))}
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
                {RECORDS.map((record) => (
                  <CarouselItem key={record.title} className="pl-1 basis-[95%] flex items-center justify-center">
                    <Record {...record} />
                  </CarouselItem>
                ))}
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
