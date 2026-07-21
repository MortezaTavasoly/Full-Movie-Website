import { WrapperButton } from "@/components/ui/atoms/WrapperButton";
import { WrapperImage } from "@/components/ui/atoms/WrapperImage";
import { WrapperText } from "@/components/ui/atoms/WrapperText";
import { ArrowDropDown } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState, useRef, useEffect } from "react";
import { IoIosNotifications } from "react-icons/io";
import { CiLogout, CiCircleList } from "react-icons/ci";
import { PiUserCircleGearLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const ProfileSection = () => {
  const [userProfileImage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const userProfile = {
    id: 1,
    firstName: "Morteza",
    lastName: "Tavasoly",
    userName: "MrMTR",
    email: "vector@gmail.com",
    watchListIds: [10, 5, 4, 12],
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavigateToProfile = () => {
    navigate(`/Profile/${userProfile.id}`);
    setIsDropdownOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleDropdown();
    } else if (event.key === "Escape" && isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  const handleOptionClick = (option: string) => {
    console.log(`Clicked: ${option}`);
    setIsDropdownOpen(false);
    // Add your navigation or action logic here based on the option
  };

  const handleOptionKeyDown = (event: React.KeyboardEvent, option: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOptionClick(option);
    }
  };

  return (
    <>
      {!userProfile && <WrapperButton text="Sign up" className="!mx-3" />}
      {userProfile && (
        <>
          <IoIosNotifications size={25} />
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center cursor-pointer hover:text-[var(--theme-primary-300)] rounded-md p-1 transition-colors"
              onClick={toggleDropdown}
              onKeyDown={handleKeyDown}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              type="button"
            >
              {userProfileImage ? (
                <WrapperImage address="" name="profile image" />
              ) : (
                <AccountCircleIcon />
              )}
              <ArrowDropDown
                className={`transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute right-0 !mt-2 w-48 bg-[var(--theme-gray-900)] rounded-md shadow-2xl !p-2 z-50  transition-all duration-300 ease-in-out  ${
                isDropdownOpen
                  ? "scale-100 transform translate-y-0 translate-x-0"
                  : "scale-0 transform -translate-y-20 translate-x-20 pointer-events-none"
              }`}
              role="menu"
              aria-label="User menu"
            >
              <div className="flex justify-center items-center !px-4 !py-2 !mb-2 !border-b !border-[var(--theme-gray-100)]">
                <WrapperText text={userProfile.userName} as="p" />
              </div>
              <div
                onClick={() => handleNavigateToProfile()}
                onKeyDown={() => handleNavigateToProfile()}
              >
                <WrapperButton
                  className="w-full flex gap-6 items-center justify-start text-left !px-4 !py-2 transition-colors hover:bg-[var(--theme-gray-800)]"
                  type="text"
                  text="Profile"
                >
                  <PiUserCircleGearLight size={25} />
                </WrapperButton>
              </div>
              <div
                onClick={() => handleOptionClick("watch list")}
                onKeyDown={(e) => handleOptionKeyDown(e, "watch list")}
              >
                <WrapperButton
                  className="w-full flex gap-6 items-center justify-start text-left !px-4 !py-2 transition-colors hover:bg-[var(--theme-gray-800)]"
                  type="text"
                  text="Watch List"
                >
                  <CiCircleList size={25} />
                </WrapperButton>
              </div>

              <div
                onClick={() => handleOptionClick("profile")}
                onKeyDown={(e) => handleOptionKeyDown(e, "profile")}
              >
                <WrapperButton
                  className="w-full flex gap-6 items-center justify-start text-left !px-4 !py-2 transition-colors hover:bg-[var(--theme-error-600)] hover:!text-[var(--theme-gray-200)]"
                  type="text"
                  variant="error"
                  text="Log Out"
                >
                  <CiLogout size={25} />
                </WrapperButton>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileSection;
