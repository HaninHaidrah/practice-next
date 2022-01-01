import React from "react";
import { useSelector } from "react-redux";
import RoomCard from "./RoomCards ";

const FilterRoom = () => {
  const { filterdRooms, activeHotel } = useSelector((state) => state.hotels);

  return (
    <>
      {filterdRooms.map((room) => {
        if (
          room.accommodationType == activeHotel ||
          room.Sleeps == activeHotel ||
          room.price == activeHotel
        ) {
          return (
            <RoomCard
              image={room.img1}
              name={room.accommodationType}
              description={room.price}
              id={room.hotelid}
            />
          );
        }
        // else{
        //     return (
        //         <div className="empty-search">
        //           <h3>unfortunately no rooms matched your search parameters</h3>
        //         </div>
        //       );
        // }
      })}
    </>
  );
};

export default FilterRoom;
