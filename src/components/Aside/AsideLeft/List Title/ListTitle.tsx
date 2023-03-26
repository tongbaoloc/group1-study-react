import './ListTitle.scss'

type TitleList = {
  title: string,
  decription: string
}

export default function ListTitle(
  { titleList }:
    { titleList: TitleList[] }
) {
  const titles = [];
  for (let i = 0; i < titleList.length; i++) {
    titles.push(
      <li>
        <h2>Title {titleList[i].title}</h2>
        <p>{titleList[i].decription}</p>
      </li>
    );
  }
  return (
    <div className="list-title">
      <ul>
        {titles}
      </ul>
    </div>
  )
}