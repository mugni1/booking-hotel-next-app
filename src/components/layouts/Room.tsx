import React, { Suspense } from "react";
import HeaderSection from "../elements/HeaderSection";
import RoomList from "../shared/RoomList";

export default function Room() {
  return (
    <>
      <HeaderSection
        title="Rooms"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique rerum a aliquam error placeat! "
      />
      <Suspense fallback={<span>Loading...</span>}>
        <RoomList />
      </Suspense>
    </>
  );
}
