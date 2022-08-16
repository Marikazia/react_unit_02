import Nav from './Nav';

function Header(props) {
	return (
		<header>
			<h1>{props.data.site_name}</h1>
			<h2>{props.second_header}</h2>
			<Nav nav = {props.data.nav} />
		</header>
	);
}

export default Header;