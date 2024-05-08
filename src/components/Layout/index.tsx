import Footer from "../Footer";
import Header from "../Header";

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
