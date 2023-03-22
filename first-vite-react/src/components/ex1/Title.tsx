type props = {
  title: string;
  subTitle: string;
};

function Title(props: props) {
  return (
    <>
      <h4>{props.title}</h4>
      <p>{props.subTitle}</p>
    </>
  )
}

export default Title
