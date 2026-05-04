import { motion } from "framer-motion"
import { PageTransition } from "@/components/PageTransition"
import { Mail, Phone } from "lucide-react"

const StudyPage = () => {
  return (
    <PageTransition>
      <motion.div className="space-y-16 max-w-2xl">
        {/* Header */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium text-highlight uppercase tracking-wider">
            Design Research Study
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-header">
            Invitation to Participate
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A research study on teletherapy environments and how they can be
            designed to better support therapeutic presence and emotional
            connection.
          </p>
        </motion.div>

        {/* Letter Body */}
        <motion.div
          className="space-y-8 text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>Dear Reader,</p>

          <p className="text-muted-foreground">
            I hope this message finds you well. My name is Zaur Babayev, and I
            am a doctoral researcher at the Estonian Academy of Arts, working on
            a practice-based PhD focused on how digital teletherapy environments
            can be designed to better support therapeutic presence and emotional
            connection. My research is supervised by Dr. Kristi Kuusk and
            Dr. Nesli Hazal Oktay, both at the Estonian Academy of Arts.
          </p>

          <p className="text-muted-foreground">
            I am looking for psychologists who would be willing to share their
            experience in a one-hour interactive interview sharing some insight
            and lived experience.
          </p>

          {/* Interview Details */}
          <div className="p-6 md:p-8 rounded-xl border border-border space-y-4">
            <h2 className="font-serif text-2xl font-normal">
              What the interview involves
            </h2>
            <p className="text-muted-foreground">
              The interview involves a single 50-minute session, which I will
              lead, where we explore together:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-foreground/40 select-none">•</span>
                How you experience your body during therapy sessions
              </li>
              <li className="flex gap-3">
                <span className="text-foreground/40 select-none">•</span>
                How you relate to and move within your therapy space
              </li>
              <li className="flex gap-3">
                <span className="text-foreground/40 select-none">•</span>
                What sensory qualities of your environment support (or hinder)
                your presence with clients
              </li>
            </ul>
          </div>

          {/* Activities */}
          <div className="p-6 md:p-8 rounded-xl border border-border space-y-4">
            <h2 className="font-serif text-2xl font-normal">
              Reflective activities
            </h2>
            <p className="text-muted-foreground">
              The session involves three short reflective activities to uncover
              these questions: body mapping, spatial mapping, and sensory
              mapping. No drawing skills are needed, these are simply tools for
              reflection and I will assist along the way.
            </p>
          </div>

          <p className="text-muted-foreground">
            I would love to meet in your own therapy room if possible, as being
            in the actual workspace adds something meaningful to the session.
            That said, meeting online works just as well if that is easier.
          </p>

          <p className="text-muted-foreground">
            There is also a completely optional add-on: a short body map to
            complete after one of your own consultations, in your own time, if
            you feel inspired to.
          </p>

          <p className="text-muted-foreground">
            If this sounds interesting or if you know a colleague who might be a
            good fit, I would be very happy to answer any questions by email or
            jump on a short call first.
          </p>
        </motion.div>

        {/* Contact Footer */}
        <motion.div
          className="space-y-4 pt-4 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-muted-foreground">Warm regards,</p>
          <div className="space-y-1">
            <p className="font-medium">Zaur Babayev</p>
            <p className="text-sm text-muted-foreground">
              Doctoral Researcher, Estonian Academy of Arts
            </p>
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="mailto:zaur.babayev@artun.ee"
              className="flex items-center gap-2 text-sm hover:opacity-50 transition-opacity w-fit"
            >
              <Mail className="w-4 h-4" />
              zaur.babayev@artun.ee
            </a>
            <a
              href="tel:+37253565965"
              className="flex items-center gap-2 text-sm hover:opacity-50 transition-opacity w-fit"
            >
              <Phone className="w-4 h-4" />
              +372 5356 5965
            </a>
          </div>
        </motion.div>
      </motion.div>
    </PageTransition>
  )
}

export default StudyPage
