import { useState } from "react";
import { WrapperButton } from "../../../components/ui/atoms/WrapperButton";
import { WrapperText } from "../../../components/ui/atoms/WrapperText";
import { FaChevronDown } from "react-icons/fa";
import type { TDropDownProps, TSubItemValue } from "./types";

function WrapperDropdown({
  value,
  className,
  itemClass,
  children,
}: Readonly<TDropDownProps>) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      {children}

      <WrapperButton
        variant="error"
        className={`relative z-5 !rounded-2xl w-full flex !justify-between items-center !p-3 border border-[var(--theme-gray-700)] !mb-2`}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <div className="flex flex-col gap-1">
          <WrapperText
            text={value?.title}
            type={{ name: "title", level: 3, weight: "bold" }}
          />
          <WrapperText
            text={value?.title}
            type={{ name: "caption", level: 1, weight: "bold" }}
          />
        </div>
        <FaChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </WrapperButton>

      <div
        className={`z-1 overflow-hidden transition-all duration-500 ease-in-out
        ${isDropdownOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col bg-[var(--theme-primary-900)]/80 shadow-2xl rounded-2xl space-y-3">
          {value?.items?.map((item: TSubItemValue, index: number) =>
            item.subItems?.length ? (
              <>
                <SubDropdownComponent key={item.id} item={item} />
                {index + 1 !== value.items.length && (
                  <div className="w-full h-[1px] bg-[var(--theme-primary-100)]/20"></div>
                )}
              </>
            ) : (
              <>
                <DropdownItem key={item.id} item={item} itemClass={itemClass} />
                {index + 1 !== value.items.length && (
                  <div className="w-full h-[1px] bg-[var(--theme-primary-100)]/20"></div>
                )}
              </>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function DropdownItem({
  item,
  itemClass,
}: Readonly<{
  item: TSubItemValue;
  itemClass?: string;
}>) {
  return (
    <div
      className={`w-full !p-4 rounded-lg  flex justify-between items-center ${itemClass}`}
    >
      <div className="flex flex-col gap-1">
        <WrapperText
          text={item.itemTitle}
          type={{ name: "body", level: 1 }}
          className="text-[var(--theme-primary-50)]"
        />
        <WrapperText
          text={item.itemCaption}
          type={{ name: "caption", level: 1 }}
          className="text-[var(--theme-primary-400)]"
        />
      </div>

      {item.buttonText && (
        <WrapperButton
          text={item.buttonText}
          variant="black"
          className="!rounded-xl"
        />
      )}
    </div>
  );
}

function SubDropdownComponent({ item }: Readonly<{ item: TSubItemValue }>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full ">
      <div className="flex justify-between items-center !p-4 ">
        <div className="flex flex-col gap-1">
          <WrapperText
            text={item.itemTitle}
            type={{ name: "body", level: 1 }}
          />
          <WrapperText
            text={item.itemCaption}
            type={{ name: "caption", level: 1 }}
            className="text-[var(--theme-primary-400)]"
          />
        </div>

        <div className="flex gap-2">
          {item.buttonText && (
            <WrapperButton text={item.buttonText} variant="primary" />
          )}

          <WrapperButton
            type="text"
            variant="black"
            shape="rounded"
            className="!px-8"
            onClick={() => setOpen((prev) => !prev)}
          >
            <FaChevronDown
              size={14}
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </WrapperButton>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out
        ${open ? "max-h-[500px] opacity-100 " : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col !m-3 bg-[var(--theme-primary-600)]/20 rounded-xl space-y-2">
          {item.subItems?.map((sub, index: number) => (
            <div key={sub.id} className="flex flex-col justify-between">
              <div className="flex justify-between items-center !p-3">
                <div className="flex flex-col gap-1">
                  <WrapperText
                    text={sub.itemTitle}
                    type={{ name: "body", level: 1 }}
                  />
                  <WrapperText
                    text={sub.itemCaption}
                    type={{ name: "caption", level: 1 }}
                    className="text-[var(--theme-primary-400)]"
                  />
                </div>
                {sub.buttonText && (
                  <WrapperButton
                    text={sub.buttonText}
                    variant="black"
                    className="!rounded-xl"
                  />
                )}
              </div>

              {index + 1 !== item?.subItems?.length && (
                <div className="w-full h-[1px] bg-[var(--theme-primary-100)]/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WrapperDropdown;
