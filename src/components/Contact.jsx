"use client";
import "../styles/contact.css";
import { motion } from "framer-motion";
import { FaInstagram, FaSpotify, FaYoutube, FaSoundcloud, FaTiktok } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section 
      className="contact-section"
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1 
        className="contact-title"
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2 }}
      >
        DJ GUZZK
      </motion.h1>

      <motion.div 
        className="contact-info"
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.4 }}
      >
        <h3>CONTACT</h3>
        <a href="mailto:guzzk@gmail.com" className="contact-email">guzzk@gmail.com</a>
      </motion.div>

  
      <motion.div 
        className="contact-footer"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.8 }}
      >
        <p>&copy; 2024 GUZZK. All rights reserved.</p>
      </motion.div>
    </motion.section>
  );
}
