import SocialMediaButton from "./SocialMediaButton";
import {socials} from "@/data";
import { ISocial } from "@/type";

const SocialMediaBar: React.FC = () => {
    return (
        <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
            {socials.map((social: ISocial) => (
                <SocialMediaButton key={social.name} social={social} />
            ))}
      </div>
    );
};

export default SocialMediaBar;