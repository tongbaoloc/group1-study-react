import React from "react";

import './index.css'
type Props = {
  children?: React.ReactNode;
};

const Main: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="app-content">{children}</div>
    </>
  );
};

export default Main;
