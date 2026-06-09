import { motion } from "framer-motion";
const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};
const featureVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const imageFloat = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
export default function Features() {
  return (
    <section className="w-full flex justify-center" id="studio">
      <div className="relative max-w-[1920px] w-full px-4 lg:px-20 py-24 flex justify-center">
        <motion.img
          src="/avatars/Vector2517.png"
          alt=""
          className="
            pointer-events-none
            absolute z-0
            w-[400px] sm:w-[1280px] md:w-[1280px] lg:w-[1280px] xl:w-[1520px] xl:right-1/2 lg:left-96
            h-[400px] sm:h-[384px] md:h-[384px] lg:h-[584px] xl:h-[624px]
            opacity-100
          "
          style={{
            top: "520px",
            left: "30%",
            transform: "translateX(-50%)",
          }}
          initial={{ opacity: 0.5, rotate: 120, scale: 1.9 }}
          whileInView={{ opacity: 0.5, rotate: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
        <motion.div
          className="relative z-10 w-full max-w-[1599px] mx-auto flex flex-col gap-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Section 1 */}
          <motion.div
            className="flex flex-col lg:flex-row-reverse items-center lg:items-stretch gap-12 lg:gap-[170px]"
            variants={featureVariants}
          >
            <motion.div
              className="relative shrink-0 flex justify-center lg:justify-end"
              variants={imageFloat}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { type: "spring", stiffness: 260, damping: 18 },
              }}
            >
              <motion.img
                src="/avatars/Polygon3.png"
                alt=""
                className="
                  pointer-events-none
                  absolute
                  z-0
                  w-[180px] sm:w-[220px] lg:w-[274px]
                  h-[175px] sm:h-[215px] lg:h-[267px]
                  rotate-60
                "
                style={{
                  top: "10%",
                  right: "-25%",
                  transform: "translateY(-50%) rotate(32deg)",
                }}
                initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 32, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
              />
              <div className="relative z-10 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[600px] lg:h-[600px] rounded-[500px] overflow-hidden border border-gray-100">
                <img
                  src="/avatars/image348.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <div className="relative flex-1 max-w-[737px] flex flex-col justify-center">
              <motion.h2
                className="relative font-gerbil text-[32px] leading-11 sm:text-[40px] sm:leading-14 lg:text-[56px] lg:leading-19 text-black mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="relative inline-block z-10">
                  <span className="absolute left-0 right-0 -bottom-2 flex justify-start z-0">
                    <img
                      src="/avatars/Vector5.png"
                      alt=""
                      className="w-[140px] sm:w-[200px] lg:w-[240px] h-5 object-contain"
                    />
                  </span>
                  Tomorrow
                </span>{" "}
                should be better than{" "}
                <span className="relative inline-block z-10">
                  <span className="absolute inset-0 bg-green-100 rounded-full z-[-1] w-full h-full" />
                  today
                </span>
              </motion.h2>
              <motion.p
                className="font-satoshi text-[16px] leading-6 sm:text-[18px] sm:leading-7 lg:text-[24px] lg:leading-9 text-black max-w-[715px] mb-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                We are a team of strategists, designers communicators,
                researchers. Together, we believe that progress only happens
                when you refuse to play things safe.
              </motion.p>
              <motion.div
                className="flex items-center gap-4 cursor-pointer"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              >
                <button className="font-satoshi text-[18px] lg:text-[20px] leading-6 font-medium text-black hover:text-gray-600 transition-colors">
                  Read more
                </button>
                <motion.img
                  src="/avatars/Arrow4.png"
                  alt=""
                  className="w-9 h-4 object-contain"
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1.4,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
          {/* Section 2 */}
          <motion.div
            className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-[290px]"
            variants={featureVariants}
          >
            <motion.div
              className="relative shrink-0 flex justify-center lg:justify-start"
              variants={imageFloat}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { type: "spring", stiffness: 260, damping: 18 },
              }}
            >
              <motion.img
                src="/avatars/Polygon1.png"
                alt=""
                className="
                  pointer-events-none
                  absolute
                  z-0
                  w-[180px] sm:w-[220px] lg:w-[274px]
                  h-[175px] sm:h-[215px] lg:h-[267px]
                "
                style={{
                  top: "-10%",
                  left: "-10%",
                  transform: "translateY(-50%)",
                }}
                initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              />
              <div className="relative z-10 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[600px] lg:h-[600px] rounded-[500px] overflow-hidden border border-gray-100">
                <img
                  src="/avatars/image349.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.img
                src="/avatars/Polygon2.png"
                alt=""
                className="
                  pointer-events-none
                  absolute
                  z-20
                  w-[140px] sm:w-[180px] lg:w-[220px]
                  h-[130px] sm:h-[170px] lg:h-[200px]
                "
                style={{
                  bottom: "-5%",
                  right: "-4%",
                }}
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
              />
            </motion.div>
            <div className="relative flex-1 max-w-[706px] flex flex-col justify-center">
              <motion.h2
                className="relative font-gerbil text-[32px] leading-11 sm:text-[40px] sm:leading-14 lg:text-[56px] lg:leading-19 text-black mb-2 max-w-[648px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="relative inline-block z-10">
                  <span className="absolute inset-0 bg-green-100 rounded-full z-[-1] w-full h-full" />
                  See
                </span>{" "}
                how we can help you{" "}
                <span className="relative inline-block z-10">
                  <span className="absolute left-0 right-0 -bottom-2 flex justify-start z-0">
                    <img
                      src="/avatars/Vector5.png"
                      alt=""
                      className="w-[160px] sm:w-[220px] lg:w-[260px] h-5 object-contain"
                    />
                  </span>
                  progress
                </span>
              </motion.h2>
              <motion.p
                className="font-satoshi text-[16px] leading-6 sm:text-[18px] sm:leading-7 lg:text-[24px] lg:leading-9 text-black max-w-[693px] mb-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                We add a layer of fearless insights and action that allows
                change makers to accelerate their progress in areas such as
                brand, design, digital, comms and social research.
              </motion.p>
              <motion.div
                className="flex items-center gap-4 cursor-pointer"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              >
                <button className="font-satoshi text-[18px] lg:text-[20px] leading-6 font-medium text-black hover:text-gray-600 transition-colors">
                  Read more
                </button>
                <motion.img
                  src="/avatars/Arrow4.png"
                  alt=""
                  className="w-9 h-4 object-contain"
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1.4,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}