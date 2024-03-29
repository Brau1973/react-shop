import React, { useState } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import logo from '@logos/logo_yard_sale.svg';
import menu from '@icons/icon_menu.svg';
import shoppinCart from '@icons/icon_shopping_cart.svg';


const Header = () => {

	const [showMenu, setShowMenu] = useState(false);

	const handleShowMenu = () => { 
		setShowMenu(!showMenu);
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleShowMenu}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart">
						<img src={shoppinCart} alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
			{showMenu && <Menu />}
		</nav>
	);
}

export default Header;
