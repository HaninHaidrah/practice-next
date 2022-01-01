import Image from "next/image";
import styles from "../../styles/HotelCard.module.css";
import Link from "next/link";

const HotelCard = ({ image, name, description, id }) => {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={image} height={200} width={500} />
      <Link href={`/hotels`}>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>{description}</p>
          <Link href={`/hotels/${id}`} onClick={() => HandleDisplay(name)}>
            <a> show more</a>
          </Link>{" "}
        </div>
      </Link>
    </div>
  );
};
export default HotelCard;
