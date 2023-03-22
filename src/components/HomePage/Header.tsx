import { useNavigate } from "react-router-dom";

type Props = {};

export const Header = (props: Props) => {
  const navigate = useNavigate();

  const handleClickHeader = () => {
    navigate("/todo");
  };

  return (
    <div
      className="flex justify-center items-center w-full p-8 bg-stone-600 text-white cursor-pointer"
      onClick={handleClickHeader}
    >
      <h1>This is a header of home page. Click here to go to ToDo App !!!</h1>
    </div>
  );
};
