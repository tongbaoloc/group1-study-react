import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Wine, wineState } from "../../store/RecoildStore";
import Header from "../partials/Header";
import Card from "./Card";
import Item from "./Item";
interface Props {
  data: Array<Wine>;
}
export default function Main(props: Props) {
  const [wine, setWine] = useRecoilState(wineState);
  useEffect(() => {
    console.log(wine);  
  }, []);
  return (
    <>
     <Header />
      {props.data && (
        <div className="container m-auto py-4 flex justify-between h-80">
          <div className="w-7/12 border-green-900 border-4 p-2">
            <Card />
          </div>
          <div className="w-4/12 border-4 border-green-900 overflow-y-scroll">
            <p className="m-2 text-xl text-black under font-bold">List of Wine</p>
            {props.data.map((item: Wine) => {
              return <Item key={item.strDrink} wine={item} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
