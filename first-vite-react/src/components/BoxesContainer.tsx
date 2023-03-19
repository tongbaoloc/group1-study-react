import Box from './Box'
import './BoxesContainer.css'

const mockBoxes = [
  { name: 'Box 1' },
  { name: 'Box 2' },
  { name: 'Box 3' },
  { name: 'Box 4' }
];

function BoxesContainer() {
  return (
    <div className='boxesContainer'>
      {mockBoxes.map(mockBox => <Box name={mockBox.name} />)}
    </div>
  )
}

export default BoxesContainer
