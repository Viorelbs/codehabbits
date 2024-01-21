import { motion } from "framer-motion";
import AnimatedTextCharacter from "../../../../components/AnimatedText";
import BtnPrimary from "../../../../components/ButtonPrimary";

export default function Hero() {
  return (
    <div className="h-screen place-content-center grid text-white ">
      <div className="max-w-3xl">
        <AnimatedTextCharacter
          text={"Welcome to CodeHabits!"}
          paragraph={false}
        />
        <AnimatedTextCharacter
          text={
            "Learning Without Barriers, Free and Open to All. Enroll Today!"
          }
          paragraph
        />
        <motion.div
          className="w-fit mx-auto"
          transition={{ ease: "easeOut", duration: 1 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
          }}
        >
          <a href={"/quizzes"}>
            <BtnPrimary className="mt-8 " text="Start learning for free" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
