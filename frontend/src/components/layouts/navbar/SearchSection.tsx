import { FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { WrapperInput } from "@/components/ui/organisms/form/WrapperInput";

const SearchSection = () => {
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);

  const handleSearchInput = () => {
    setIsSearchInputOpen(!isSearchInputOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputContainerRef.current &&
        !inputContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchInputOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`
          transition-all duration-300 ease-in-out
          ${
            isSearchInputOpen
              ? "scale-100 transform translate-y-10 translate-x-8"
              : "scale-0 transform translate-y-1 translate-x-30 pointer-events-none"
          }
        `}
      >
        <div
          ref={inputContainerRef}
          className="transition duration-150 ease-in-out flex items-center justify-center rounded-xl !px-3 !py-2"
        >
          <form action="submit">
            <WrapperInput
              variant="black"
              name="search"
              label="testing label"
              placeholder="this is it"
              type="text"
              clear
              className=""
            />
          </form>
        </div>
      </div>
      <div
        ref={dropdownRef}
        onMouseUp={handleSearchInput}
        className={`
          transition-all transform duration-500 ease-in-out cursor-pointer
          ${isSearchInputOpen ? "scale-120 " : "scale-100 "}
        `}
      >
        <FaSearch
          className={`${
            isSearchInputOpen
              ? "text-[var(--theme-primary-200)]"
              : "text-[var(--theme-primary-400)]"
          } hover:text-[var(--theme-primary-300)]`}
          size={20}
        />
      </div>
    </>
  );
};

export default SearchSection;
