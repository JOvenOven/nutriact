"use client";

import Container from "@/app/components/Container";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";
import ExerciseDetector from "@/app/components/ml/ExerciseDetector";
import { categories } from "@/app/components/navbar/Categories";
import { ExerciseTarget } from "@/app/interfaces";
import { SafeUser } from "@/app/types";
import { useMemo } from "react";

interface ListingClientProps {
  listing: ExerciseTarget;
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser,
}) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.bodyPart);
  }, [listing.bodyPart]);
  return (
    <>
      <Header currentUser={currentUser} />
      <Container>
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-6">
            <div
              className="
            mt-20
            "
            >
              <ListingHead
                title={listing.name}
                imageSrc={listing.gifUrl}
                id={listing.id}
                currentUser={currentUser}
              />
            </div>

            <div
              className="
            grid
            grid-cols-1
            md:grid-cols-7
            md:gap-10
            mt-6
          "
            >
              <ListingInfo
                name={listing.name}
                target={listing.target}
                equipment={listing.equipment}
                bodyPart={listing.bodyPart}
                gifUrl={listing.gifUrl}
                id={listing.id}
              />
            </div>
          </div>

          <div className="mt-12">
            <ExerciseDetector />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ListingClient;
