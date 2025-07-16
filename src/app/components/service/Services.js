"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./services.module.css";

const services = [
  {
    title: "Future-Ready Strategies",
    shortDescription: "Empowering BFSI with advisory consulting.",
    longDescription: "We help BFSI organizations implement AI-driven methodologies and agile frameworks for sustainable digital transformation with minimized risk.",
    image: "/handshake.jpg",
    link: "/services/future-ready-strategies",
  },
  {
    title: "AI-Powered Solutions",
    shortDescription: "Transforming enterprises with AI automation.",
    longDescription: "From chatbots to predictive analytics, we automate critical operations and optimize workflows using AI technologies.",
    image: "/handshake.jpg",
    link: "/services/ai-powered-solutions",
  },
  {
    title: "Cloud Transformation",
    shortDescription: "Seamless cloud migration & optimization.",
    longDescription: "We assist with cloud modernization, multi-cloud strategies, and operational excellence via cloud-native development.",
    image: "/handshake.jpg",
    link: "/services/cloud-transformation",
  },
  {
    title: "Cybersecurity Consulting",
    shortDescription: "Protecting digital assets securely.",
    longDescription: "Security consulting covering vulnerability assessment, penetration testing, zero trust models, and real-time threat monitoring.",
    image: "/handshake.jpg",
    link: "/services/cybersecurity-consulting",
  },
  {
    title: "Product Engineering",
    shortDescription: "End-to-end product development.",
    longDescription: "We build scalable products with agile methodology, CI/CD pipelines, and user-centric design for rapid market delivery.",
    image: "/handshake.jpg",
    link: "/services/product-engineering",
  },
  {
    title: "Data Analytics & Insights",
    shortDescription: "Unlock actionable business insights.",
    longDescription: "We enable data-driven decisions via analytics, dashboards, and AI-powered reports that drive measurable growth.",
    image: "/handshake.jpg",
    link: "/services/data-analytics-insights",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className={styles.servicesWrapper}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Autoplay, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{ delay: 100 }}
          speed={3000}
          loop={true}
          navigation={false}
          onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex % services.length)
          }
          className={styles.swiper}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className={styles.slide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className={styles.serviceImage}
                  />
                </div>

                <div className={styles.textWrapper}>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.shortDesc}>{service.shortDescription}</p>
                  <p className={styles.longDesc}>{service.longDescription}</p>

                  <Link href={service.link} className={styles.readMoreBtn}>
                    Read More
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.navWrapper}>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={styles.navButton}
          >
            <ArrowLeft size={20} />
          </button>

          <span className={styles.pagination}>
            {activeIndex + 1} / {services.length}
          </span>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={styles.navButton}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
