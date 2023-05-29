import "../styles/globals.css";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { MaterialProvider } from "../utils/materialContext";
import Link from "next/link";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const salesArray = [
    "MIỄN PHÍ &$100 ĐÈN GỖ CHO ĐƠN HÀNG TỪ $199",
    "MUA 1 TẶNG 1",
    "GIẢM 50% HÔM NAY",
  ];

  const [salesText, setSalesText] = useState("");

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    const rand = getRandomInt(
      salesArray.length > 2 ? salesArray.length - 1 : salesArray.length
    );

    setSalesText(salesArray[rand]);
  }, []);
  return (
    <MaterialProvider>
      <div className="absolute left-10 top-10 z-10">
        <Link href="https://earthcolorsvn.com/collage-art-frames/">
          <button
            className="px-5 py-2 rounded-md text-white font-bold"
            style={{ backgroundColor: "#BF5A1F" }}
          >
            Home
          </button>
        </Link>
      </div>
      <Component {...pageProps} />
      <div className="lg:hidden text-8xl text-center pt-10 w-full">
          <span>WEB HOẠT ĐỘNG TỐT HƠN KHI DÙNG TRÊN MÁY TÍNH</span>
        </div>
    </MaterialProvider>
  );
}

export default MyApp;
