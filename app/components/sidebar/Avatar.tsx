"use client";

import { SafeUser } from "@/app/types";
import Image from "next/image";

interface AvatarProps {
  user?: SafeUser | null;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className="relative">
      <div
        className="
            relative
            inline-block
            rounded-full
            overflow-hidden
            h-9
            w-9
            md:h-11
            md:w-11
        "
      >
        <Image
          fill
          alt="avatar"
          src={user?.image || "/images/placeholder.jpg"}
        />
      </div>
      <span
        className="
          absoltue
          block
          rounded-full
          bg-green-500
          ring-2
          ring-white
          top-0
          right-0
          h-2
          w-2
          md:h-3
          md:w-3
        "
      />
    </div>
  );
};

export default Avatar;