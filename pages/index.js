import Head from "next/head";
import Bannar from "../components/Bannar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductSlider from "../components/ProductSlider";
import ProductsList from "../components/ProductsList";
import ProductsSection from "../components/ProductsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>furniture</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://furniture.superfast.shop/static/favicon.svg"
        />
      </Head>
      <Header />
      <Bannar />
      <ProductsList />
      {/* <ProductSlider />
      <ProductsSection />
      <Footer /> */}
    </>
  );
}
