import Box from "../Box";
import "./index.css";

type Props = {};

const Boxes: React.FC<Props> = (props: Props) => {
  const boxes = Array(4).fill(1);

  return (
    <>
      <div className="app-boxes">
        {boxes.map(() => {
          return <Box />;
        })}
      </div>
    </>
  );
};

export default Boxes;
