

export default function ProjectPreview({ ProjectName, ProjectPic, ProjectStack, ProjectURL, ProjectDescription, ProjNumber }){
	
	const bg_colours = ["#ad88bc", "#bd9ccc"];
	const preview_style = {
		width: "calc(50%)",
 		backgroundColor: bg_colours[(ProjNumber % 4) === 0 || (ProjNumber % 4) === 3 ? 0 : 1],
	};

	return (
		<div style={preview_style}>
			<div style={{backgroundColor: "white", border: "1px solid #bd9ccc"}}><h3 style={{margin: "0px", padding: "4px"}}>{ProjectName}</h3></div>
			<div><a href={ProjectURL}><img id="preview-img" alt="project preview" data-src={ProjectPic} style={{width: "100%", aspectRatio: "600 / 260"}}></img></a></div>
			<div style={{paddingRight: "10px", paddingLeft: "10px"}}>
				<p align="justify">{ProjectDescription}</p>
				<p align="left"><b>Stack:</b> {ProjectStack}</p>
			</div>
		</div>
	);
}
