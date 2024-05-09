import Footer from "../Footer";
import Header from "../Header";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
