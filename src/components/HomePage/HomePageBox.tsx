import { BoxItem } from "./BoxItem";

type Props = {};

export const HomePageBox = (props: Props) => {
  const boxList = [
    {
      name: "Box 1",
    },
    {
      name: "Box 2",
    },
    {
      name: "Box 3",
    },
    {
      name: "Box 4",
    },
  ];
  return (
    <div className="flex flex-row">
      {boxList.map((box) => {
        return <BoxItem name={box.name} />;
      })}
    </div>
  );
};
