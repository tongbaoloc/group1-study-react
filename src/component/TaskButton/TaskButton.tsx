import * as Icon from 'react-feather';

type Props = {
    onClick: () => void;
}

const TaskButton : React.FC<Props> = (props:Props) =>{
    return <div className='mt-[-1rem] cursor-pointer'>
        <div className=" shadow-xl flex content-center justify-center bg-violet-300 rounded-full h-1/12 p-2 w-1/6 m-auto hover:bg-violet-500" onClick={props.onClick}>
            <Icon.Plus className='text-white'/>
            <p className='text-white'>New Task</p>
        </div>
    </div>
}

export default TaskButton