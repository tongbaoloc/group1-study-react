import "./Box.css"

type props = {
  name: string
}

function Box(props: props) {
  return (
    <div className="box">
      {props.name}
    </div>
  )
}

export default Box
