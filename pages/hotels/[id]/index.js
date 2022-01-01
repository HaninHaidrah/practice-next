import Link from "next/link";
import styles from "../../../styles/HotelCard.module.css";
import Banner from "../../../components/Hotels/Banner";
import FeaturedRooms from "../../../components/Hotels/FeaturedRooms";

export const getStaticPaths = async (context) => {
  const res = await fetch("https://toto-do-7.herokuapp.com/hotel");
  const data = await res.json();
  console.log(data, "daaaaaaaaaaaaaata");
  const paths = data.map((hotel) => {
    return {
      params: { id: hotel.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://toto-do-7.herokuapp.com/hotel/${id}`);
  const data = await res.json();
  return {
    props: { hotel: data },
  };
};
export default function Hotel({ hotel }) {
  console.log(hotel);
  var divImage = {
    backgroundImage: "url(" + hotel.img + ")",
  };
  return (
    <>
      <header className={styles.defaultHero} style={divImage}>
        <Banner title={hotel.hotelName} subtitle={hotel.Discription}>
          <Link href={`/hotels/${hotel.id}/rooms`} className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </header>

      <FeaturedRooms id={hotel.id} />
    </>
  );
}
