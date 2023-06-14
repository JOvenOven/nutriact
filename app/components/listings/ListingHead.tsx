"use client";

import { SafeUser } from "@/app/types";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  imageSrc,
  id,
  currentUser,
}) => {
  return (
    <>
      <Heading
        title={title.toUpperCase()}
        subtitle={`Detalles del ejercicio`}
      />
      <div
        className="
        w-full
        h-[60vh]
        overflow-hidden
        rounded-xl
        relative
    "
      >
        {/* object-cover */}
        <Image src={imageSrc} alt={title} fill className="w-full" />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};
export default ListingHead;
