import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-[#1a191e] text-white py-8"
      initial={{ opacity: 0, y: 50 }} // Starts hidden & lower
      whileInView={{ opacity: 1, y: 0 }} // Fades in & moves up
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }} // Only animates once per scroll
    >
      <div className="mx-auto px-6">
        {/* Separator Line */}
        <motion.div
          className="border-t border-gray-600 opacity-50 mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        ></motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Left Section - Branding & Resume Button */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <a
              href="resume_anzhelika_kostyuk.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff9720] text-black px-5 py-2 text-sm font-medium rounded-md hover:bg-[#e6891f] transition-colors"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Right Section - Social Icons */}
          <div className="flex gap-4 mt-4 sm:mt-0">
            {[
              "https://github.com/A-coderr",
              "http://www.linkedin.com/in/anzhelika-kostyuk-a2b388194",
              "https://www.instagram.com/a_akcio/?hl=en",
              "https://www.facebook.com/profile.php?id=100011369881132",
            ].map((url, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <SocialIcon
                  url={url}
                  bgColor="transparent"
                  fgColor="white"
                  style={{ height: 35, width: 35 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-neutral-400 mt-6">
          © {new Date().getFullYear()} Anzhelika Kostyuk. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
