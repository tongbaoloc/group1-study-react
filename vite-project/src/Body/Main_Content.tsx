import { Zombie } from "./Zombie";

export function Main_Content() {
  const zombies = ['zombie 1', 'zombie 2', 'zombie 3', 'zombie 4']

  return (
    <>
      <div className="w-3/4 bg-slate-300">
        MAIN CONTENT
        {zombies.map(zombie => <Zombie name={zombie} />)}
      </div>
    </>
  )
}