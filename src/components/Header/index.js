import styles from'./index.module.css';
import logo from '../../img/logo.svg';

const Header = () => (
  <nav className={styles.nav}>
    <img className={styles.logo} alt="logo" src={logo} />
  </nav>
)


export default Header;