import ProjectImage from "./ProjectImage";

export default function ProjectPreview({ ProjectName, ProjectPic, ProjectStack, ProjectURL, ProjectDescription, ProjNumber, PicNarrow }){
	
	return (
		<a href={ProjectURL} className="preview">
		<div>
			<div style={{backgroundColor: "white"}}><h3 style={{margin: "0px", padding: "4px"}}>{ProjectName}</h3></div>
			<div style={{overflow: "hidden", aspectRatio: "600 / 260", position: "relative", width: "100%"}}>
			<ProjectImage
					ProjectPic={ProjectPic}
					PicNarrow={PicNarrow}
			/>
			</div>
			{/* todo: replace src with data-src to enable lazy loading;  */}
			<div style={{paddingRight: "10px", paddingLeft: "10px"}}>
				<p align="justify">{ProjectDescription}</p>
				<p align="left"><b>Stack:</b> {ProjectStack}</p>
			</div>
		</div>
		</a>
	);

}
