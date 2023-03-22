import { Main_Content } from "./Body/Main_Content";
import { Side_Bar } from "./Body/Side_Bar";

export function Body() {
  return (
    <>
      <div className="flex flex-row h-screen w-full">
        <Main_Content />
        <Side_Bar />
      </div>
    </>
  )
}