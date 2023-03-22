import { Aside } from "./Aside";
import { Content } from "./Content";

type Props = {};

export const HomePageBody = (props: Props) => {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-3/4 p-2">
        <Content />
      </div>

      <div className="w-1/4 p-2">
        <Aside />
      </div>
    </div>
  );
};
