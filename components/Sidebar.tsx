import Avatar from "@/elements/Avatar";
import NameTag from "@/elements/NameTag";
import RoleTag from "@/elements/RoleTag";
import SocialMediaBar from "@/elements/SocialMediaBar";
import ToggleThemeButtons from "@/elements/ToggleThemeButton";
import DownloadButton from "@/elements/DownloadButton";


const Sidebar: React.FC = () => {
  
  return (
    <div>
      <Avatar />
      <NameTag />
      <RoleTag />
      <DownloadButton />
      <SocialMediaBar />
      <ToggleThemeButtons />
    </div>
  );
};

export default Sidebar;