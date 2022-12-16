import { CSSReset } from "../components/CSSReset";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Timeline from "../components/Timeline";
import config from "../config.json";

const HomePage = () => (
	<>
		<CSSReset />
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				flex: 1,
			}}
		>
			<Header />
			<Menu />
			<Timeline playlists={config.playlists} />
		</div>
	</>
);

export default HomePage;
