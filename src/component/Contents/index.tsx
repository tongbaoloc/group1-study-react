import BigTitle from "../BigTitle";
import Title from "../Title";
import "./index.css";

type Props = {};

const Contents: React.FC<Props> = (props: Props) => {
  const titles = Array(4).fill(1);
  return (
    <>
      <div className="app-title">
        <BigTitle />
        <div className="app-title__w80">
          {titles.map(() => {
            return <Title />;
          })}
        </div>
      </div>
    </>
  );
};

export default Contents;
