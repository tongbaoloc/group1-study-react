interface Props {
  name: string;
}

export function Todo(props: Props) {
  return (
    <>
      <div className="flex flex-row p-2">
        <div style={{minWidth: 250}}>{props.name}</div>
        <button className="rounded border px-2 py-1.5">Delete</button>
      </div>
    </>
  )
}