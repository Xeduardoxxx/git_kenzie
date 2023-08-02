import logo from "../../assets/Nu Kenzie.png"
import styles from "./style.module.scss"


const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;