import Box from './Box/Box'
import './Boxes.scss'

function Boxes({ amount }: { amount: number }) {
  const _amount = amount;
  const boxes = [];

  for (let i = 0; i < _amount; i++) {
    boxes.push(<Box key={i} id={i} />);
  }
  return (
    <div className="boxes">
      {
        boxes
      }
    </div>
  )
}

export default Boxes;