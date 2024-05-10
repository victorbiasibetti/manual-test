import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "../../../public/images/logo.png";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <Image src={logo} width={40} height={40} alt="Manual" />
      </nav>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Be good</h2>
          <h2>to yourself</h2>
          <p>
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>
          <button> TAKE THE QUIZ </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
