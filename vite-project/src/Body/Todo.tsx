import style from './Todo.module.css';

interface Props {
  id: number;
  name: string;
  onclickDelete: (id: number) => void;
}

export function Todo(props: Props) {
  const handleDelete = (id: number) => {
    props.onclickDelete(id);
  }

  return (
    <>
      <div className={style.todo} key={props.id}>
        <div style={{minWidth: 250, fontSize: 30,}}>{props.name}</div>
        <button className={style.checkBtn} onClick={() => handleDelete(props.id)}>
          <i className="text-green-500 text-2xl fa fa-check"></i>
        </button>
      </div>
    </>
  )
}