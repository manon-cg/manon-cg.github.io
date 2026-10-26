import ImageButton from "./ImageButton";
import linkedin_img from "../assets/linkedin_logo.png"
import github_img from "../assets/github_logo.svg"

export default function Footer(){
	return (
		<header className="my-footer">
			<div style={{padding: "5px"}}>
				<p>© Manon Groos - 2026</p>
			</div>
			<div style={{padding: "5px",}}>
				<ImageButton
					buttonLink={"https://www.linkedin.com/in/manon-groos/"}
					buttonImg={linkedin_img}
					buttonAlt={"LinkedIn logo"}
				/>
				<ImageButton
					buttonLink={"https://github.com/manon-cg"}
					buttonImg={github_img}
					buttonAlt={"GitHub logo"}
				/>
			</div>
		</header>
	);
}
