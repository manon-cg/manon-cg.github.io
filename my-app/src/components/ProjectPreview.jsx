import ProjectImage from "./ProjectImage";

export default function ProjectPreview({ ProjectName, ProjectPic, ProjectStack, ProjectURL, ProjectDescription, ProjNumber, PicNarrow }){
	
	const bg_colours = ["#ad88bc", "#ccc2ea"];
	const preview_style = {
		width: "calc(45%)",
 		backgroundColor: bg_colours[(ProjNumber % 4) === 0 || (ProjNumber % 4) === 3 ? 0 : 1],
		margin: "10px",
		borderRadius: "10px",
		overflow: "hidden",
	};

	return (
		<div style={preview_style}>
			<div style={{backgroundColor: "white"}}><h3 style={{margin: "0px", padding: "4px"}}>{ProjectName}</h3></div>
			<div style={{overflow: "hidden", aspectRatio: "600 / 260", position: "relative", width: "100%"}}>
				<a href={ProjectURL}>
					<ProjectImage
						ProjectPic={ProjectPic}
						PicNarrow={PicNarrow}
					/>
				</a>
			</div>
			{/* todo: replace src with data-src to enable lazy loading;  */}
			<div style={{paddingRight: "10px", paddingLeft: "10px"}}>
				<p align="justify">{ProjectDescription}</p>
				<p align="left"><b>Stack:</b> {ProjectStack}</p>
			</div>
		</div>
	);
}
