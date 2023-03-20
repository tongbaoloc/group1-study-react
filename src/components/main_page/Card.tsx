import { useRecoilValue } from 'recoil';
import {  wineState } from '../../store/RecoildStore';

export default function Card() {
  const wine = useRecoilValue(wineState);
  return (
    <div className="card rounded-none " style={{height:'29rem'}}>
        <img src={wine.strDrinkThumb} className='m-auto' alt="" style={{height:'26rem'}} />
    </div>
  )
}
