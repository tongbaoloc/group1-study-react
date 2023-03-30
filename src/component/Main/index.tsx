import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Main: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col justify-center content-center bg-blue-200 m-auto min-h-screen">{children}</div>
    </>
  );
};

export default Main;
