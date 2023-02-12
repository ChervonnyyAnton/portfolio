import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      src="https://avatars.githubusercontent.com/u/94194066?v=4"
      alt="user_avatar"
      className="w-32 h-32 mx-auto border rounded-full"
      width={128}
      height={128}
      quality={100}
    />
  );
}
