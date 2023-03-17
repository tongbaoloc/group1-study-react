type props = {
  title: string;
  description: string;
};

export const Content = (props: props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
};
