// import logo from './logo.svg';
// import './App.css';
// import Test from './Test';
// import Header from './Header/Header';
// import Goods from './Goods';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const headerData = {
	site_name : 'site_name',
	second_header : 'site_title',
	nav : [
		{ "link" : "nav1", "text": "my link 1 "},				
		{ "link" : "nav2", "text": "my link 2 "},				
		{ "link" : "nav3", "text": "my link 3 "},			
	]
}

const sidebarData = {
	sidebar_ul : [
		{ "link" : "li1", "text": "Page 1 "},				
		{ "link" : "li2", "text": "Page 2 "},				
		{ "link" : "li3", "text": "Page 3 "},	
	]
}

function App() {
  return (
    <>
      <Header data={headerData}/>
			<Main data={sidebarData}/>
			<Footer data={headerData}/>
    </>
  );
}

export default App;
