
import * as Icon from 'react-feather';

const Header: React.FC = () =>{
    return <header className='flex content-center bg-violet-300 h-1/12 p-4 mx-80'>
        <Icon.AlignJustify className='text-white'/>
        <h3 className='text-white flex-1 text-center'>Website todo</h3>        
    </header>
}

export default Header;