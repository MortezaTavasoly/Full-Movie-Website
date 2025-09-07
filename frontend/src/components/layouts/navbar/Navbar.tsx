import ShahMovieLogo from "@/assets/logo/logo";
import { Search } from "@mui/icons-material";
import CategoryMenu from "./CategoryMenu";
import ProfileSection from "./ProfileSection";

const Navbar = () => {
  return (
    <div className="flex items-center !p-2">
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
