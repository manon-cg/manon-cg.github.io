

export default function ProjectPreview({ ProjectName, ProjectPic, ProjectStack, ProjectURL, ProjectDescription, ProjNumber }){
	
	const bg_colours = ["#ad88bc", "#bd9ccc"];
	const preview_style = {
		width: "calc(50%)",
 		backgroundColor: bg_colours[(ProjNumber % 4) === 0 || (ProjNumber % 4) === 3 ? 0 : 1],
	};
	
	return (
		<div style={preview_style}>
			<div style={{backgroundColor: "white", border: "1px solid #bd9ccc"}}><h3 style={{margin: "0px", padding: "4px"}}>{ProjectName}</h3></div>
			<a href={ProjectURL}><div id="picture" style={{width: "100%", aspectRatio: "600 / 260", backgroundImage: 'url(' + ProjectPic + ')', backgroundSize: "cover", backgroundPosition: "center", '--hover-opacity':0.5}}></div></a>
			{/* <a href={ProjectURL}><div className="project-preview --project-pic:{ProjectPic}" /></a> */}
			{/* <a href={ProjectURL}><div className="preview-img backgroundImage: url(ProjectPic)"></div></a> */}
			{/* todo: make alt text a function var as well */}
			<div style={{paddingRight: "10px", paddingLeft: "10px"}}>
				<p align="justify">{ProjectDescription}</p>
				<p align="left"><b>Stack:</b> {ProjectStack}</p>
			</div>
		</div>
	);
}
