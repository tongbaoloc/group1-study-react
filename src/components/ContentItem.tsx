type Props = {
  title: string;
  description: string;
};

export const ContentItem = (props: Props) => {
  return (
    <div className="flex justify-start items-start  flex-col w-full h-1/4 mt-2 bg-blue-300 text-white">
      <h3>Title {props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};
