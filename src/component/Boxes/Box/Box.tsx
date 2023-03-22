import './Box.css'

export default function Box(
    { id }: { id: number }
) {
    return (
        <div className="box">
            {id + 1}
        </div>
    )
}