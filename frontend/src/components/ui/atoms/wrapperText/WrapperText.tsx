// src/components/WrapperText.tsx
import { useMemo } from "react";
import type { TextWrapperProps } from "./types";

const WrapperText = ({
  as: Tag = "span",
  text,
  classes = "",
  type,
  ...props
}: TextWrapperProps) => {
  const getDefaultClassNames = () => {
    switch (type.name) {
      case "headline":
        if (type.level === 1) {
          return "!text-[3.5rem] rtl:leading-[84px] ltr:leading-[66px] tracking-[0]";
        } else if (type.level === 2) {
          return "!text-[3rem] rtl:leading-[72px] ltr:leading-[56px] tracking-[0]";
        } else if (type.level === 3) {
          return "!text-[2.25rem] rtl:leading-[54px] ltr:leading-[42px] tracking-[0]";
        } else if (type.level === 4) {
          return "!text-[2rem] rtl:leading-[48px] ltr:leading-[38px] tracking-[0]";
        }
        break;
      case "title":
        if (type.level === 1) {
          return "!text-[1.75rem] rtl:leading-[42px] ltr:leading-[32px] tracking-[0]";
        } else if (type.level === 2) {
          return "!text-[1.5rem] rtl:leading-[36px] ltr:leading-[28px] tracking-[0]";
        } else if (type.level === 3) {
          return "!text-[1.25rem] rtl:leading-[30px] ltr:leading-[24px] tracking-[0]";
        }
        break;
      case "body":
        if (type.level === 1) {
          return "!text-[1rem] rtl:leading-[24px] ltr:leading-[20px] tracking-[0]";
        } else if (type.level === 2 || type.level === 3) {
          return "!text-[0.875rem] rtl:leading-[21px] ltr:leading-[18px] tracking-[0]";
        }
        break;
      case "caption":
        if (type.level === 1) {
          console.log(type);
          return "!text-[0.75rem] rtl:leading-[18px] ltr:leading-[16px] tracking-[0]";
        } else if (type.level === 2) {
          return "!text-[0.625rem] rtl:leading-[15px] ltr:leading-[12px] tracking-[0]";
        }
        break;
      default:
        return "";
    }
    return "";
  };

  const defaultClassNames = useMemo(() => getDefaultClassNames(), [type]);
  const className = `${defaultClassNames} ${classes}`.trim();

  return (
    <Tag className={className} {...props}>
      {text}
    </Tag>
  );
};

export default WrapperText;
