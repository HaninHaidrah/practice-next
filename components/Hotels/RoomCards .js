import Image from "next/image";
import styles from "../../styles/HotelCard.module.css";
import Link from "next/link";
import { displayRoom } from "../../store/actions/action";
import { useDispatch } from "react-redux";
const RoomCard = ({ image, name, description, id, roomId }) => {
  const dispatch = useDispatch();
  function dipatcher(id) {
    console.log("dispatch", id);
    dispatch(displayRoom(id));
  }

  return (
    <div className={styles.card}>
      <Image className={styles.image} src={image} height={200} width={500} onClick={() => dipatcher(roomId)} />
      <Link href={`/hotels/${id}/rooms`}>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>{description}</p>
          <Link
            href={`/hotels/${id}/rooms/${roomId}`}
            
          >
            <a> show more</a>
          </Link>{" "}
        </div>
      </Link>
    </div>
  );
};
export default RoomCard;
