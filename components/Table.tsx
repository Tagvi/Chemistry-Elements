import { Main as MotionlessMain } from "@styles/Table";
import { FC } from "react";
import type { TableData } from "@localTypes/Table";
import { motion } from "framer-motion";

type Props = {
  data: TableData;
  unit: string;
};

const Main = motion(MotionlessMain);

const Table: FC<Props> = ({ data, unit }) => {
  return (
    <Main initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <tbody>
        {data.map(({ name, grams }) => {
          return (
            <tr key={name}>
              <td>{name}</td>
              <td>
                {Math.round(grams)} {unit}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Main>
  );
};

export default Table;
