import { useTheme } from "next-themes";

const ToggleThemeButtons: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  return (
    <button
      onClick={changeTheme}
      className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 font-kaushan"
    >
      Toggle Theme
    </button>
  );
};

export default ToggleThemeButtons;
