import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

const Container = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>
        <article className="article">{children}</article>
      </main>

      <Footer />
    </>
  );
};

export default Container;
