import "./index.css";

type Props = {};

const Box: React.FC<Props> = (pros: Props) => {
  const randomNumber = Math.floor(Math.random() * 10);
  const boxName = `Box ${randomNumber}`;

  return (
    <>
      <div className="box">
        <div className="box-content">
          <p>{boxName}</p>
        </div>
      </div>
    </>
  );
};

export default Box;
