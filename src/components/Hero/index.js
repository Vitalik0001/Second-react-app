import styles from './index.module.css';
import photos from '../../img/photos.png';

const Hero = () => (
  <section className={styles.hero}>
    <img alt='photos' src={photos} className={styles.photo} />
    <h1 className={styles.header}>Online Experiences</h1>
    <p className={styles.text}>Join unique interactive activities led by 
    one-of-a-kind hosts—all without leaving home.</p>
  </section>
)

export default Hero;