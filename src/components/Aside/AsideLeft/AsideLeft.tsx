import './AsideLeft.scss'
import BigTitle from './Big Title/BigTitle'
import ListTitle from './List Title/ListTitle'

export default function AsideLeft() {
  const listTitle = [
    { title: 'Title 1', decreption: 'This is the first title' },
    { title: 'Second Title', decreption: 'This is the 2nd title' },
    { title: 'Title number 3', decreption: 'This title is the third title' },
    { title: 'Last title', decreption: 'This is the last title of this page' },
    { title: 'Final title', decreption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sed non obcaecati. Consequatur, ipsum porro ea exercitationem odit aliquid commodi.' },
  ];
  return (
    <div className="aside-left">
      <BigTitle title='This is a big title' />
      <ListTitle titleList={listTitle.map(value => ({ title: value.title, decription: value.decreption }))} />
    </div>
  )
}