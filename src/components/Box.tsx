type props = {
  name: string;
};

export const Box = (props: props) => {
  return (
    <div className="flex text-center box">
      <p>{props.name}</p>
    </div>
  );
};
