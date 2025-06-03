import React, { Suspense } from "react";
import HeaderSection from "../elements/HeaderSection";
import RoomList from "../shared/RoomList";
import LoadingRoom from "../shared/RoomList/LoadingRoom";

export default function Room() {
  return (
    <>
      <HeaderSection
        title="Rooms"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique rerum a aliquam error placeat! "
      />
      <Suspense fallback={<LoadingRoom />}>
        <RoomList />
      </Suspense>
    </>
  );
}
