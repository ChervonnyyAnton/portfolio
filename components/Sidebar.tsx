import Avatar from "@/elements/Avatar";
import NameTag from "@/elements/NameTag";
import RoleTag from "@/elements/RoleTag";
import DownloadCVButton from "@/elements/DownloadCVButton";
import SocialMediaBar from "@/elements/SocialMediaBar";
import ToggleThemeButtons from "@/elements/ToggleThemeButton";


const Sidebar: React.FC = () => {
  
  return (
    <div>
      <Avatar />
      <NameTag />
      <RoleTag />
      <DownloadCVButton />
      <SocialMediaBar />
      <ToggleThemeButtons />
    </div>
  );
};

export default Sidebar;