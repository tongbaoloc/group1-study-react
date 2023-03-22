type Props = {
  name: string;
};

export const BoxItem = (props: Props) => {
  return (
    <div className="flex justify-center items-center flex-col w-1/4 h-32 m-2 bg-pink-300 text-white">
      <h3>Title {props.name}</h3>
    </div>
  );
};
