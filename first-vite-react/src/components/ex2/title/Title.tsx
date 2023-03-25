import MenuIcon from "@mui/icons-material/Menu";

function Title() {
  return (
    <div className="w-1/2 h-12 bg-violet-500 flex items-center relative mb-4">
      <div className="absolute left-4 items-center">
        <MenuIcon sx={{ color: "white" }} />
      </div>
      <div className="text-center text-white text-lg font-bold w-full">
        Website todo
      </div>
    </div>
  );
}

export default Title;
