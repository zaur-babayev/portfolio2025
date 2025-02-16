import { motion } from "framer-motion"

export const ProfileImage = () => {
  return (
    <div className="relative w-full aspect-square">
      {/* Main image */}
      <motion.div
        className="relative w-full h-full rounded-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <img
          src="/placeholder-profile.jpg"
          alt="Zaur Babayev"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  )
}
