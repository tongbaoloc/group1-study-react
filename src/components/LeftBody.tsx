import { BigTitle } from "./BigTitle";
import { Content } from "./Content";

type props = {};

const contents = [
  {
    title: "Content 1",
    description: "Learn React",
  },
  {
    title: "Content 2",
    description: "Learn TypeScripts",
  },
  {
    title: "Content 3",
    description: "Learn Vite",
  },
];

export const LeftBody = (props: props) => {
  return (
    <div className="width-70">
      <BigTitle />
      <div className="border width-80">
        {contents.map((content) => (
          <Content title={content.title} description={content.description} />
        ))}
      </div>
    </div>
  );
};
