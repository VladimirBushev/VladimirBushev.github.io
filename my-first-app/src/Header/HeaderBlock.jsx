import HeaderStyle from './HeaderBlock.module.css';

const HeaderBlock = (props) => {
    return (
        <div className={HeaderStyle.block}><a>{props.value}</a></div>
    )
}

export default HeaderBlock;

