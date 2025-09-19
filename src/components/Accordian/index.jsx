import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./accordian.module.scss";

const Accordion = ({ title, children, isOpen, setIsOpen }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children, windowWidth, title]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionSection}>
      <div
        className={`${styles.accordion} ${isOpen ? styles.active : ""}`}
        onClick={toggleAccordion}
      >
        {title}
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0 }}
            animate={{ height: contentHeight ?? 0 + 18, opacity: 1 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={styles.accordionContent}
          >
            <div ref={contentRef}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
