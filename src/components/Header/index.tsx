import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "../../../public/images/logo.png";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <Image src={logo} width={40} height={40} alt="Manual" />
      </nav>
    </div>
  );
};

export default Header;
