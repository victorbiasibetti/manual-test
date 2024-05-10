import Footer from "../Footer";
import Hero from "../Hero";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Hero />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
