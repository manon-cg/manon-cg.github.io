
export default function ProjectPreview({ ProjectName, ProjectPic, ProjectStack}){

	return (
		<div className="project-preview">
			<div>{ProjectName}</div>
			<div><img src={ProjectPic} alt="project screencap" width="100%"></img></div>
			{/* todo: make alt a function var as well */}
			<div>Skills: {ProjectStack}</div>
		</div>
	);
}
