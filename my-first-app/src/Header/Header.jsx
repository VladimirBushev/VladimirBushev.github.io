import headerStyle from './Header.module.css';
import HeaderImage from './HeaderImage.jsx';
import HeaderBlock from './HeaderBlock.jsx';


const Header = () => {
    return (
    <header className={headerStyle.header}>
        <div className={headerStyle.headerContent}>
            <HeaderImage />
            <HeaderBlock value='Плеер' />
            <HeaderBlock value='Файлы'/>
            <HeaderBlock value='Приложения'/>
            <HeaderBlock value='Маркет'/>
        </div>  
    </header>
    )
}

export default Header;