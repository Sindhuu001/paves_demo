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
    <div className="relative w-full bg-[#f4f8fb] py-16 px-8">
      <motion.h2
        className="text-2xl md:text-3xl font-extrabold text-[#0c3c60] mb-6 md:mb-8 text-center tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      <Swiper
        modules={[Autoplay, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 100 }}
        speed = {3000}
        loop={true}
        navigation={false}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex % services.length)}
        className="w-full max-w-6xl mx-auto"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="flex flex-col md:flex-row items-center bg-white shadow-xl rounded-2xl p-6 md:p-12 transition-all duration-500 hover:scale-[1.01]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="w-full md:w-1/2"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              <motion.div
                className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-12"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#0c3c60] mb-4">{service.title}</h3>
                <p className="text-lg text-gray-700 mb-3">{service.shortDescription}</p>
                <p className="text-base text-gray-600 mb-5">{service.longDescription}</p>

                <Link
                  href={service.link}
                  className="inline-block bg-[#ff5e9c] text-white px-6 py-2 rounded-full hover:bg-[#e94b8d] transition-colors duration-300"
                >
                  Read More
                </Link>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation + Pagination on Right Side */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col items-center space-y-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-[#0c3c60] text-white p-3 rounded-full shadow-md hover:bg-[#145b92] transition-all"
        >
          <ArrowLeft size={20} />
        </button>

        <span className="text-[#0c3c60] font-semibold">{activeIndex + 1} / {services.length}</span>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-[#0c3c60] text-white p-3 rounded-full shadow-md hover:bg-[#145b92] transition-all"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Services;
