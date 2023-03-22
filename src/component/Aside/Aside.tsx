import './Aside.scss'
import AsideLeft from './AsideLeft/AsideLeft'
import AsideRight from './AsideRight/AsideRight'

export default function Aside() {
  return (
    <div className="aside">
      <AsideLeft />
      <AsideRight />
    </div>
  )
}