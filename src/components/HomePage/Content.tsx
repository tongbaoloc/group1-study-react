import { ContentItem } from "./ContentItem";
import { ContentTitle } from "./ContentTitle";

type Props = {};

export const Content = (props: Props) => {
  const contentList = [
    {
      title: "Title 01",
      description: "This is a description for title 01",
    },
    {
      title: "Title 02",
      description: "This is a description for title 02",
    },
    {
      title: "Title 03",
      description: "This is a description for title 03",
    },
  ];
  return (
    <>
      <ContentTitle />
      {contentList.map((content) => {
        return (
          <ContentItem
            title={content.title}
            description={content.description}
          />
        );
      })}
    </>
  );
};
