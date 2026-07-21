import { useState, type ReactNode } from "react";
import type { TItems, TTabProps } from "./types";
import { WrapperButton } from "../../atoms";

function Tab({
  id,
  children,
  classes,
  items = [],
  type = "horizontal",
}: Readonly<TTabProps>) {
  const [currentTab, setCurrentTab] = useState("ProfileInformation");

  const handleChangeTabEvent = (item: TItems) => {
    setCurrentTab(item.key);
    if (item.event) item.event();
  };

  return (
    <div
      key={id}
      className={`flex h-50 min-h-50 items-center !m-5 ${type === "horizontal" ? "flex-col" : "flex-row"} ${classes}`}
    >
      <div
        className={`flex gap-1 ${type === "horizontal" ? "flex-row" : "flex-col"}`}
      >
        {items.map((item) => {
          return (
            <WrapperButton
              key={item.id}
              text={item.text}
              className={` ${type === "horizontal" ? "rounded-b-none" : " !mx-2"} ${currentTab === item.key ? "!bg-[var(--theme-primary-800)]" : ""} ${item.classes}`}
              onClick={() => handleChangeTabEvent(item)}
            />
          );
        })}
      </div>

      <div className="bg-[var(--theme-primary-800)]/70 w-full h-full rounded-xl !mx-auto !py-5 !px-8">
        {children?.filter((item) => {
          return item?.key === currentTab;
        })}
      </div>
    </div>
  );
}

export default Tab;
