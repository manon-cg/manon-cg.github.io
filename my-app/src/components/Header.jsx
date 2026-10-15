/** imports here */
import Button from "./Button";

export default function Header(){

	return (
		<div className="my-header">
			<div style={{position: "fixed", left: "10px", margin: "10px"}}><h1>Website</h1></div>
			<div style={{position: "fixed", right: "10px", display: "flex", alignContent: "center", justifyItems: "center", margin: "10px"}}>
				<Button
					buttonLink={"https://www.linkedin.com/in/manon-groos/"}
					buttonText={"LinkedIn"}
				/>
				<Button
					buttonLink={"https://github.com/manon-cg"}
					buttonText={"GitHub"}
				/>
			</div>
		</div>
	);
}
