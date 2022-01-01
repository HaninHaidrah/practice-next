import HotelCard from "../../components/Hotels/HotelCards";
import styles from "../../styles/HotelCard.module.css";
import { get } from "../../store/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { display } from "../../store/actions/action";
import Link from "next/link";
import FeaturedRooms from "../../components/Hotels/FeaturedRooms";

// export const getStaticProps = async () => {
//   const res = await fetch("https://toto-do-7.herokuapp.com/hotel");
//   const data = await res.json();
//   console.log(data, "...........................");

//   get()

//   return {
//     props: { hotels: data },
//   };
// };

export default function Hotels() {
  const dispatch = useDispatch();
  const { hotels } = useSelector((state) => state.hotels);

  const HandleDisplay = (name) => {
    dispatch(display(name)), console.log("workeeed", name);
  };
  useEffect(() => {
    dispatch(get());
  }, []);
  return (
    <div>
      <form className={styles.form}>
        <input
          id="Location"
          name="Location"
          type="text"
          autoComplete="Location"
          required
          placeholder="Location"
        />
        <input
          id="startday"
          name="startday"
          type="text"
          autoComplete="startday"
          required
          placeholder="Start Day"
        />
        <input
          id="endday"
          name="endday"
          type="endday"
          autoComplete="endday"
          required
          placeholder="End Day"
        />
      </form>

      {hotels.map((hotel) => {
        return (
          <>
            <HotelCard
              image={hotel.img}
              name={hotel.hotelName}
              description={hotel.Discription}
              id={hotel.id}
            />
          </>
        );
      })}

    </div>
  );
}
