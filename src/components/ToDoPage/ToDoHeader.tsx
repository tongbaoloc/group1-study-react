import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

type Props = {};

export const ToDoHeader = (props: Props) => {
  const navigate = useNavigate();

  const handleClickMenu = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center w-full p-8 bg-purple-500 text-white">
      <div className="fixed top-7 left-10 cursor-pointer" onClick={handleClickMenu}>
        <MenuIcon fontSize="large" />
      </div>
      <h1 className="text-lg font-bold tracking-widest">Website Todo</h1>
    </div>
  );
};
