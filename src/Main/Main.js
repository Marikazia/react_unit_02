import Sidebar from './Sidebar';

function Main(props) {
  return (
    <>
			<p>Text example</p>
			<Sidebar sidebar_ul = {props.data.sidebar_ul} />
    </>
  );
}

export default Main;