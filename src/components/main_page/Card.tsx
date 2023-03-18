import { useRecoilValue } from 'recoil';
import {  wineState } from '../../store/RecoildStore';

export default function Card() {
  const wine = useRecoilValue(wineState);
  return (
    <div className="card rounded-none">
        <img src={wine.strDrinkThumb} className='m-auto w-52' alt="" />
    </div>
  )
}
