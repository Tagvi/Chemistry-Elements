import type { RequiredData } from "@localTypes/Data";
import type { FC } from "react";
import { Main } from "@styles/Arrows";
import router from "next/router";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion";
type Props = {
  next: RequiredData[number]["next"];
  prev: RequiredData[number]["prev"];
};

const Arrows: FC<Props> = ({ next, prev }) => {
  return (
    <Main>
      {prev ? (
        <motion.button
          type="button"
          aria-label="წინაზე გადასვლა"
          onClick={() => router.push(prev)}
          whileHover={{
            scale: 1.2,
          }}
        >
          <IoArrowBackOutline />
        </motion.button>
      ) : (
        <div />
      )}
      {next ? (
        <motion.button
          type="button"
          aria-label="შემდეგზე გადასვლა"
          onClick={() => router.push(next)}
          whileHover={{
            scale: 1.2,
          }}
        >
          <IoArrowForwardOutline />
        </motion.button>
      ) : (
        <div />
      )}
    </Main>
  );
};

export default Arrows;
