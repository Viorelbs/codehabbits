import { motion } from "framer-motion";

interface AnimatedTextCharacterProps {
  text: string;
  paragraph: boolean;
  variant?: "regular" | "font-semibold";
}
export default function AnimatedTextCharacter(
  props: AnimatedTextCharacterProps,
) {
  const letters = Array.from(props.text);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: 0.03 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`overflow-hidden flex flex-wrap justify-center ${
        props.variant ?? "regular"
      }`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <>
          {props.paragraph ? (
            <motion.p variants={child} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.p>
          ) : (
            <motion.h1 variants={child} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.h1>
          )}
        </>
      ))}
    </motion.div>
  );
}
