import ShahMovieLogo from "@/assets/logo/logo";
import CategoryMenu from "./CategoryMenu";
import ProfileSection from "./ProfileSection";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchSection from "./SearchSection";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 50) {
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
      className={`w-full z-999 flex items-center !p-2 !pb-5 fixed top-0 transition duration-300 ease-linear bg-linear-to-b from-[var(--theme-base-dark)] !border-[var(--theme-primary-300)]/0
        ${isScrolled && "to-[var(--theme-base-dark)]/60 backdrop-blur-2xl !border-b !border-[var(--theme-primary-300)]/20 "}`}
    >
      <Link to="/">
        <ShahMovieLogo />
      </Link>
      <div className="flex justify-between items-center w-full !p-5 !pb-0 ">
        <CategoryMenu />
        <div className="flex gap-2 items-center">
          {/* <SearchSection /> */}
          <ProfileSection />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
