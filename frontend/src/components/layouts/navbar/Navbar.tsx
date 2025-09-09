import ShahMovieLogo from "@/assets/logo/logo";
import { Search } from "@mui/icons-material";
import CategoryMenu from "./CategoryMenu";
import ProfileSection from "./ProfileSection";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`z-999 flex items-center !p-2 !pb-5 fixed container transition duration-300 ease-linear bg-linear-to-b from-[var(--theme-base-dark)]
        ${isScrolled && "to-[var(--theme-base-dark)]"}`}
    >
      <ShahMovieLogo />
      <div className="flex justify-between items-center w-full !p-5 !pb-0 ">
        <CategoryMenu />
        <div>
          <Search />
          <ProfileSection />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
