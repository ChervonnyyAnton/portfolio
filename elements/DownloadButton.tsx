import { GiTie } from "react-icons/gi";

const DownloadButton: React.FC = () => {
    return (
        <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 font-kaushan"
        href="assets/chervonnyy_cv.pdf"
        download={"chervonnyy_cv.pdf"}
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
    );
};

export default DownloadButton;