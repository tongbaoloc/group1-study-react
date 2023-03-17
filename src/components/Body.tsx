import { Box } from "./Box";
import { LeftBody } from "./LeftBody";
import { RightBody } from "./RightBody";

type props = {};

const boxes = [
  {
    title: "Box 1",
  },
  {
    title: "Box 2",
  },
  {
    title: "Box 3",
  },
  {
    title: "Box 4",
  },
];

export const Body = (props: props) => {
  return (
    <div className="body">
      <div className="flex width-full height-body">
        <LeftBody />
        <RightBody />
      </div>
      <div className="flex justify-content-sb border">
        {boxes.map((box) => (
          <Box name={box.title} />
        ))}
      </div>
    </div>
  );
};
