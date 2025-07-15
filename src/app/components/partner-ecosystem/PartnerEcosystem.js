"use client";

import Image from "next/image";
import styles from "./partners.module.css";
import { motion } from "framer-motion";

const PartnerEcosystem = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className={styles.heading}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        PARTNERS ECOSYSTEM
      </motion.h2>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.div
          className={styles.imageSection}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/handshake.jpg"
            alt="Handshake"
            width={500}
            height={400}
          />
        </motion.div>

        <motion.div
          className={styles.textSection}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h3 className={styles.subHeading}>Devoted to Progress</h3>

          <div className={styles.partners}>
            {["aws.svg", "Microsoft.svg", "Google-Cloud-Symbol.png", "vmware.webp"].map((logo) => (
              <motion.div
                key={logo}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image
                  src={`/${logo}`}
                  alt={logo.split(".")[0]}
                  width={50}
                  height={50}
                />
              </motion.div>
            ))}
          </div>

          <h4>Strategic Alliances and Partnerships</h4>
          <p>Explore our growing ecosystem of partners, shaping the future of technology together.</p>

          <motion.a
            href="#"
            className={styles.link}
            whileHover={{ x: 5 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            Learn More →
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PartnerEcosystem;
