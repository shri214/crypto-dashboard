import React from "react";
import Button from "../Button/index";
import "./landing.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import mobile from "../../assets/605adb9070e57ab3ab4994e0_iphone_compare_full-p-500-removebg-preview.png";
import gradient from "../../assets/gradient.12a666ed10b3b442b534-removebg-preview.png";

const LandingPage = () => {
  const navigation = useNavigate();
  return (
    <div className="landing-info">
      <div className="info-track">
        <div className="info">
          <motion.h1
            className="track h-primary"
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Track Crypto
          </motion.h1>
          <motion.h1
            className="real h-primary"
            initial={{ opacity: 0, translateY: -200 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Real Time.
          </motion.h1>
        </div>
        <div className="para">
          <motion.p
            initial={{ opacity: 0, translateY: -400 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            Track crypto through a public api in real time. Visit the dashboard
            to do so!
          </motion.p>
        </div>
        <motion.div
          className="landing-btn"
          initial={{ opacity: 0, translateY: -500 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <Button
            clName={"dash"}
            text={"Dashboard"}
            onClick={() => navigation("/dashboard")}
          />
          <Button clName={"dash-back"} text={"Share"} />
        </motion.div>
      </div>
      <div className="mobile-img">
        <motion.img
          src={mobile}
          alt="mobile-view"
          className="mobile"
          initial={{ translateY: -10 }}
          animate={{ translateY: 10 }}
          transition={{
            duration: 2,
            type: "smooth",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <img src={gradient} alt="gradient-view" className="gradient" />
      </div>
    </div>
  );
};
export default LandingPage;
