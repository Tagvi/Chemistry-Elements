import type { InferGetStaticPropsType, NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { Container, Main } from "@styles/Main";
import Arrows from "@components/Arrows";
import type { RequiredData } from "@localTypes/Data";
import Table from "@components/Table";
import FormattedText from "@components/FormattedText";
import SectionHeader from "@components/SectionHeader";
import { fetchData } from "@utils/fetch";
import { getPathNames } from "@utils/getPathNames";
import { translate } from "@utils/translate";
import { TableData } from "@localTypes/Table";
import { calculateData } from "@utils/calculateData";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import data from "../data/data";

type CompType = NextPage<InferGetStaticPropsType<typeof getStaticProps>>;

const Home: CompType = ({ name, data: { text, foods, next, prev } }) => {
  const [isUsingCalc, setIsUsingCalc] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [calculatedData, setCalculatedData] = useState<TableData | null>(null);
  useEffect(() => {
    if (!inputValue || Number(inputValue) <= 0) {
      setCalculatedData(null);
      return;
    }
    setCalculatedData(calculateData(inputValue, foods));
  }, [inputValue, foods, setCalculatedData]);
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Container>
        <Main {...{ isUsingCalc }} aria-label={name}>
          <AnimatePresence exitBeforeEnter>
            <SectionHeader
              key={name}
              {...{
                name,
                setIsUsingCalc,
                isUsingCalc,
                inputValue,
                setInputValue,
              }}
            />
            {isUsingCalc ? (
              calculatedData ? (
                <Table
                  data={calculatedData}
                  unit={name === "იოდი" ? "მკგ" : "მგ"}
                />
              ) : null
            ) : (
              <motion.p
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "120%", opacity: 0 }}
              >
                <FormattedText text={text} />
              </motion.p>
            )}
          </AnimatePresence>
          {!isUsingCalc ? <Arrows next={next} prev={prev} /> : null}
        </Main>
      </Container>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPathNames(data),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<{
  name: string;
  data: RequiredData[number];
}> = async ({ params }) => {
  const { food: name } = params!;
  if (typeof name !== "string")
    return {
      notFound: true,
    };
  const food = data.filter((obj) => obj.name === name)[0];
  return {
    props: {
      data: food,
      name: translate(food.name),
    },
  };
};
export default Home;
