import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { wineState } from '../../store/RecoildStore';
export default function Item(item: any) {
  const [wine, setWine] = useRecoilState(wineState);
  function handleClick(){
    setWine(item.wine);
  }
  return (
    <div>
        <div className='item cursor-pointer' onClick={handleClick}>
          <div className="flex justify-between">
          <p className='font-bold'>{item.wine.strDrink}</p>
          <i>{item.wine.strCategory}</i>
          </div>
          <p>{item.wine.strInstructions}</p>
        </div>
    </div>
  )
}
