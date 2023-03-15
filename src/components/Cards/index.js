import styles from './index.module.css';
import star from '../../img/star.svg';

const Card = ({info}) => {
  const {country, price, reviewCount, img, title, rating, openSpots} = info;
  let badgeText;

  if (openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (openSpots === 27) {
    badgeText = "ONLINE"
  }

  return (
    <div className={styles.card}>
      {badgeText && <div className={styles.banner}>
        <p>{badgeText}</p>
      </div>}
      <img alt='human' src={img} className={styles.image} />
      <div className={styles.stats}>
        <img alt='star' src={star} className={styles.star} />
        <span>{rating}</span>
        <span className={styles.gray}>({reviewCount}) • </span>
        <span className={styles.gray}>{country}</span>
      </div>
      <p>{title}</p>
      <p><span className={styles.bold}>From ${price}</span> / person</p>
    </div>
  )
}

export default Card;