import config from "../config.json";

const Header = () => (
	<section>
		<img src={`https://github.com/${config.github}.png`} />
		<div>
			<h2>{config.name}</h2>
			<p>{config.job}</p>
		</div>
	</section>
);

export default Header;
