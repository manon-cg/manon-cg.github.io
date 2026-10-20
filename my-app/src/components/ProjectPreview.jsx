
export default function ProjectPreview({ ProjectName, ProjectPic, ProjectStack, ProjectURL, ProjectDescription }){

	return (
		<div className="project-preview">
			<div style={{backgroundColor: "white", border: "1px solid pink"}}><h3 style={{margin: "0px", padding: "4px"}}>{ProjectName}</h3></div>
			{/* todo: make the top bar look like a computer bar? but then width should be 100% */}
			<div><a href={ProjectURL}><img src={ProjectPic} alt="project screencap" width="100%"></img></a></div>
			{/* todo: make alt a function var as well */}
			<div style={{paddingRight: "10px", paddingLeft: "10px"}}>
				<p align="justify">{ProjectDescription}</p>
				<p align="left"><b>Skills:</b> {ProjectStack}</p>
			</div>
		</div>
	);
}
