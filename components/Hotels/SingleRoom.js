import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import Banner from "./Banner";
import styles from "../../styles/RoomCards.module.css";


export default function SingleRoom() {
  const [value, onChange] = useState(new Date());
  const { rooms, activeRoom } = useSelector((state) => state.hotels);
  console.log(rooms, activeRoom);

  // return (
  //   <>
  //     <div>
  //       {rooms.map((room)=>{

  //         if (room.id==activeRoom){
  //           console.log(room,"rooooooom");
  //           return(
  //             <div className={styles.card}>
  //             <Image className={styles.image} src={room.heroImage} height={200} width={500} />
  //             <Image className={styles.image} src={room.img1} height={200} width={200} />
  //             <Image className={styles.image} src={room.img2} height={200} width={200} />
  //             <Image className={styles.image} src={room.img3} height={200} width={200} />

  //             {/* <Link href={`/hotels/${id}/rooms`}> */}
  //               <div className={styles.info}>
  //                 <h3>{room.accomedationType}</h3>
  //                 <p>{room.price}</p>

  //                 {/* <Link href={`/hotels/${id}/rooms/${roomId}`} onClick={dispatch(displayRoom(roomId))}>
  //                   <a> show more</a>
  //                 </Link>{" "} */}
  //               </div>
  //             {/* </Link> */}
  //           </div>
  //           )
  //         }
  //       })}
  //       {/* <Calendar onChange={onChange} value={value} /> */}
  //     </div>
  //   </>
  // );

  var divImage;

  return (
    <>
      {/* <header className={styles.defaultHero} style={divImage}> */}
        <Banner title={`Room 1 room`}>
          {/* <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link> */}
        </Banner>
      {/* </header> */}
      <section className={styles.singleRoom}>
        {rooms.map((room) => {
          if (room.id == activeRoom) {
            divImage = {
              backgroundImage: "url(" + room.heroImage + ")",
            };

            return (
              <>
                <div className={styles.singleRoomImages}>
                  <img  src={room.img1} alt={room.img2} />
                  <img  src={room.img2} alt={room.img2} />
                  <img  src={room.img3} alt={room.img2} />
                </div>
                <div className={styles.singleRoomInfo}>
                  <article className={styles.desc}>
                    <h3>Details</h3>
                    <p>{room.accommodationType} <br></br> {room.Extras}</p>
                  </article>
                  <article className={styles.info}>
                    <h3>info</h3>
                    <h6>price : {room.price}</h6>
                    <h6>size : {room.size}</h6>
                    <h6>
                      max capacity :
                      {room.Sleeps > 1
                        ? `${room.Sleeps} people`
                        : `${room.Sleeps}  person`}
                    </h6>
                    {/* <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                    <h6>{breakfast && "free breakfast included"}</h6> */}
                  </article>
                </div>
              </>
            );
          }
        })}
      </section>
      <section className="room-extras">
        <h6>extras </h6>
         <Calendar onChange={onChange} value={value} />

        {/* <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul> */}
      </section>
    </>
  );
}
