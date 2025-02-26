import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Footer from "@/Components/Common/Layout/Footer";
import Navbar from "@/Components/Common/Layout/Navbar";
import ResNav from "@/Components/Common/Layout/ResNav";
import Head from "next/head";

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();

  useEffect(() => {
    // Left Click ko handle karo (Forcefully same tab me open hoga)
    const handleClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest("a");

      if (link && link.href.startsWith(window.location.origin)) {
        event.preventDefault();
        router.push(link.getAttribute("href") || "/");
      }
    };

    // **Right Click Disable** karna (New Tab Option ko hatane ke liye)
    const disableRightClick = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("contextmenu", disableRightClick); // Right-click ko disable karo

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, [router]);

  return (
    <>
      <div>
        <ResNav />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="pt-24">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
