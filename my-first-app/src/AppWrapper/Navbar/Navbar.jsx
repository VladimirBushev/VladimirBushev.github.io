import navbarStyle from './Navbar.module.css';
import NavbarBlock from './NavbarBlock.jsx';
import React from 'react';


const NavBar = () => {
    return (
        <nav className={navbarStyle.nav}>
            <NavbarBlock value='Моя страница' to='/profile/id1'/>
            <NavbarBlock value='Новости' to='/news'/>
            <NavbarBlock value='Мессенджер' to='/messages'/>
            <NavbarBlock value='Друзья' to='/friends'/>
            <NavbarBlock value='Пользователи' to='/users'/>
            <NavbarBlock value='Фотографии' to='/photos'/>
            <NavbarBlock value='Музыка' to='/musics'/>
            <NavbarBlock value='Видео' to='/videos'/>
            <NavbarBlock value='Клипы' to='/clips'/>
            <NavbarBlock value='Игры' to='/games'/>
        </nav>
    )
}


export default NavBar;