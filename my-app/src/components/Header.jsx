import Button from "./Button";

export default function Header(){

	return (
		<div className="my-header">
			<div style={{position: "fixed", left: "10px", margin: "10px"}}><a href="/portfolio" ><h1>PORTFOLIO</h1></a></div>
			<div style={{position: "fixed", right: "10px", display: "flex", alignContent: "center", justifyItems: "center", margin: "10px"}}>
				<Button
					buttonLink={"/about"}
					buttonText={"About"}
				/>
				<Button
					buttonLink={"/portfolio"}
					buttonText={"Portfolio"}
				/>
			</div>
		</div>
	);
}
