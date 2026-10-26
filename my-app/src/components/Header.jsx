/** imports here */
// import ImageButton from "./ImageButton";
// import linkedin_img from "../assets/link_logos/linkedin_logo.png"
// import github_img from "../assets/link_logos/github_logo.svg"

export default function Header(){

	return (
		<div className="my-header">
			<div style={{position: "fixed", left: "10px", margin: "10px"}}><h1>PORTFOLIO</h1></div>
			{/* <div style={{position: "fixed", right: "10px", display: "flex", alignContent: "center", justifyItems: "center", margin: "10px"}}>
				<ImageButton
					buttonLink={"https://www.linkedin.com/in/manon-groos/"}
					buttonImg={linkedin_img}
				/>
				<ImageButton
					buttonLink={"https://github.com/manon-cg"}
					buttonImg={github_img}
				/>
			</div> */}
		</div>
	);
}
