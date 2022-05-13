import { FC } from "react";
import { Main as MotionlessMain } from "@styles/SectionHeader";
import { IoArrowBackOutline, IoCalculatorOutline } from "react-icons/io5";
import type { SetState } from "@localTypes/SetState";
import { motion } from "framer-motion";

type Props = {
  isUsingCalc: boolean;
  inputValue: string;
  setInputValue: SetState<string>;
  setIsUsingCalc: SetState<boolean>;
  name: string;
};

const Main = motion(MotionlessMain);

const SectionHeader: FC<Props> = ({
  isUsingCalc,
  inputValue,
  setInputValue,
  name,
  setIsUsingCalc,
}) => {
  return (
    <Main
      {...{ isUsingCalc }}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-120%", opacity: 0 }}
    >
      {isUsingCalc ? (
        <input
          type="number"
          placeholder={`რაოდენობა (${name === "იოდი" ? "მკგ" : "მგ"})`}
          value={inputValue}
          min={0}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      ) : (
        <h1>{name}</h1>
      )}
      <motion.button
        type="button"
        aria-label={`${!isUsingCalc ? "კალკულატორზე" : "ტექსტზე"} გადასვლა`}
        onClick={() => setIsUsingCalc((s) => !s)}
        whileHover={{
          scale: 1.1,
        }}
      >
        {!isUsingCalc ? <IoCalculatorOutline /> : <IoArrowBackOutline />}
      </motion.button>
    </Main>
  );
};

export default SectionHeader;
