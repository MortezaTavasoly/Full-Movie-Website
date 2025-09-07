import { WrapperImage } from "@/components/ui/atoms/wrapperImage";
import { ArrowDropDown, Notifications } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

const ProfileSection = () => {
  const [userProfileImage] = useState("");

  return (
    <>
      <Notifications />
      {userProfileImage ? (
        <WrapperImage address="" name="profile image" />
      ) : (
        <AccountCircleIcon />
      )}

      <ArrowDropDown />
    </>
  );
};

export default ProfileSection;
