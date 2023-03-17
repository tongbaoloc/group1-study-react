import { BigTitle } from "./BigTitle";
import { Content } from "./Content";

type props = {};

export const LeftBody = (props: props) => {
  return (
    <div className="width-70">
      <BigTitle />
      <div className="border width-80">
        <Content title="Content 1" description="Learn React" />
        <Content title="Content 2" description="Learn TypeScripts" />
        <Content title="Content 3" description="Learn Vite" />
      </div>
    </div>
  );
};
