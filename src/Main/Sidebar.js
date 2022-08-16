function Sidebar(props) {
	let data = props.sidebar_ul;
	const listItem = data.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>);
	return (
		<ul>
			{listItem}
		</ul>
	);
}

export default Sidebar;