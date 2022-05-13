import { FC } from "react";
import { v4 as uuid } from "uuid";

type Props = {
  text: string;
};

const FormattedText: FC<Props> = ({ text }) => {
  return (
    <>
      {text
        .split(new RegExp(/#n/))
        .flatMap((text: string, idx: number) => {
          if (idx === 0) return text;
          return [<br key={uuid()} />, text];
        })
        .flatMap((item) => {
          if (typeof item === "string") {
            return item
              .split(new RegExp(/#st(.*?)\#st/))
              .map((text: string, idx: number) =>
                idx % 2 !== 0 ? <strong key={uuid()}>{text}</strong> : text
              );
          }
          return item;
        })}
    </>
  );
};

export default FormattedText;
