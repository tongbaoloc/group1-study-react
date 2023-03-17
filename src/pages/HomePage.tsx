import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HomePageBody } from "../components/HomePageBody";
import { HomePageBox } from "../components/HomePageBox";

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
