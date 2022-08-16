import Nav from '../Header/Nav';

function Footer(props) {
	// let data = props.footer;
  return (
    <footer>
			<h3>site_name</h3>
			<Nav nav = {props.data.nav} />
    </footer>
  );
}

export default Footer;