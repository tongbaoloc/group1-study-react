import { Footer } from "../components/HomePage/Footer";
import { Header } from "../components/HomePage/Header";
import { HomePageBody } from "../components/HomePage/HomePageBody";
import { HomePageBox } from "../components/HomePage/HomePageBox";

type Props = {};

export const HomePage = (props: Props) => {
  return (
    <>
      <Header />
      <HomePageBody />
      <HomePageBox />
      <Footer />
    </>
  );
};
