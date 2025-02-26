import "../styles/globals.css";
import UserNavbar from "../Components/navbar/UserNavbar";
import WebflowFooter from "@/Components/services/word_press_development/footer/WebflowFooter";
import Footer from "@/Components/Common/Layout/Footer";
import Navbar from "@/Components/Common/Layout/Navbar";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
