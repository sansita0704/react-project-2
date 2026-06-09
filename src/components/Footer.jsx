import { motion } from "framer-motion";
const footerCols = [
  {
    title: "Company",
    items: [
      { label: "Home", href: "#home" },
      { label: "Studio", href: "#studio" },
      { label: "Service", href: "#services" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Terms & Policies",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Explore", href: "/explore" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
  {
    title: "Follow Us",
    items: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Youtube", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  },
];
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};
const colVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};
export default function FooterCTA() {
  return (
    <section className="w-full flex justify-center bg-[#D7EEDD]" id="contact">
      <div className="relative max-w-[1920px] w-full px-4 lg:px-20 py-24 flex flex-col gap-20">
        <motion.div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 flex gap-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.img
            src="/avatars/Vector2519.png"
            alt=""
            className="w-[90px] sm:w-[120px] lg:w-[164px] h-auto"
            animate={{ y: [0, -6, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3.2,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src="/avatars/Vector2518.png"
            alt=""
            className="w-[90px] sm:w-[120px] lg:w-[164px] h-auto"
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3.2,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
        </motion.div>
        <motion.img
          src="/avatars/Ellipse739.png"
          alt=""
          className="
            absolute z-0
            w-[50px] sm:w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px]
            top-[170px] right-[30px]
            sm:top-[200px] sm:right-[40px]
            md:top-[230px] md:right-[20px]
            lg:top-[230px] lg:right-[60px]
            xl:top-[230px] xl:right-[100px]
          "
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.div
          className="w-full flex justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="relative w-full max-w-[904px] rounded-[60px] px-6 sm:px-10 lg:px-16 py-10 sm:py-12 lg:py-16 text-center bg-white/5 mt-15 backdrop-blur-sm border border-white/10"
            whileHover={{
              y: -8,
              boxShadow: "0 22px 60px rgba(0,0,0,0.18)",
              transition: { type: "spring", stiffness: 230, damping: 20 },
            }}
          >
            <motion.h2
              className="font-gerbil text-[28px] sm:text-[45px] lg:text-[72px] leading-10 sm:leading-[64px] lg:leading-[88px] mb-4 text-black"
              variants={colVariants}
            >
              Subscribe to
              <br />
              our newsletter
            </motion.h2>
            <motion.p
              className="font-satoshi text-[16px] sm:text-[18px] lg:text-[24px] leading-6 sm:leading-7 lg:leading-9 max-w-[557px] mx-auto mb-8 text-black font-medium"
              variants={colVariants}
            >
              To make your stay special and even more memorable
            </motion.p>
            <motion.button
              className="inline-flex items-center justify-center rounded-[100px] bg-black text-white font-satoshi font-bold text-[16px] sm:text-[18px] lg:text-[20px] leading-[30px] px-10 py-3 sm:px-12 sm:py-4 cursor-pointer"
              variants={colVariants}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 14px 30px rgba(0,0,0,0.25)",
                transition: { type: "spring", stiffness: 260, damping: 18 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe now
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full flex justify-center mt-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="w-full max-w-[1600px] border-t border-black/20" />
        </motion.div>
        <motion.div
          className="w-full max-w-[1600px] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mt-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {footerCols.map((col) => (
            <motion.div key={col.title} variants={colVariants}>
              <h3 className="font-gerbil text-[18px] sm:text-[20px] lg:text-[22px] leading-7.5 mb-3 text-black">
                {col.title}
              </h3>
              <ul className="space-y-1">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-satoshi text-[16px] sm:text-[18px] lg:text-[20px] leading-7.5 text-black hover:translate-x-1 transition-transform inline-block hover:text-black/75"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          <motion.div variants={colVariants}>
            <h3 className="font-gerbil text-[18px] sm:text-[20px] lg:text-[22px] leading-7.5 mb-3 text-black">
              Office
            </h3>
            <p className="font-satoshi text-[16px] sm:text-[18px] lg:text-[20px] leading-7.5 text-black">
              1498w Fulton St, STE
              <br />
              2D Chicago, IL 60607.
              <br />
              <br />
              (123) 456-7890
              <br />
              <br />
              <a
                href="mailto:info@elementum.com"
                className="underline underline-offset-2 hover:text-black/75"
              >
                info@elementum.com
              </a>
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full flex flex-col items-center gap-1 mt-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="font-satoshi text-[14px] sm:text-[16px] lg:text-[18px] leading-7.5 text-center text-black">
            ©2026 Elementum. All rights reserved
          </p>
        </motion.div>
      </div>
    </section>
  );
}