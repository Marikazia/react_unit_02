function Main(props) {
  return (
    <>
			<p>Text example</p>
			<Sidebar sidebar_ul = {props.data.sidebar_ul} />
    </>
  );
}

function Sidebar(props) {
	let data = props.sidebar_ul;
	const listItem = data.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>);
	return (
		<ul>
			{listItem}
		</ul>
	);
}

export default Main;