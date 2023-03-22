interface Props {
  name: string;
}

export function Zombie(props: Props) {
  return (
    <>
      <div>{props.name}</div>
    </>
  )
}