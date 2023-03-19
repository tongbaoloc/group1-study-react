import Title from './Title';
import './TitlesContainer.css'

const mockTitles = [
  {
    title: 'Title 1',
    subTitle: 'SubTitle 1'
  },
  {
    title: 'Title 2',
    subTitle: 'SubTitle 2'
  },
  {
    title: 'Title 3',
    subTitle: 'SubTitle 3'
  },
];

function TitlesContainer() {
  return (
    <div className='titlesContainer'>
      {mockTitles.map(mockTitle => <Title title={mockTitle.title} subTitle={mockTitle.subTitle} />)}
    </div>
  )
}

export default TitlesContainer
