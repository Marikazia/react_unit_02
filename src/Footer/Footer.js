function Footer() {
  return (
    <>
			<h3>site_name</h3>
			<Nav nav = {props.data.nav} />
      {/* <Header data={headerData} />
      <Test />
      {goods.map(item => <Goods title={item.title} cost={item.cost} image={item.image} />)} */}
    </>
  );
}

export default Footer;