import ProjectPreview from './ProjectPreview';
import so_long_pic from '../assets/so_long_screencap.png'

export default function PortfolioPage(){
	return (
		<div className="all-blocks">
			<div className="main-site">
			<h1>Portfolio (under construction)</h1>
			</div>
			<div style={{padding: "5px", backgroundColor: "#bd71c0", width: "100%", height: "20px"}}>CODAM Projects</div>
			<div className="experience-block">
				<ProjectPreview
				ProjectName={"MiniShell"}
				ProjectPic={""}
				ProjectStack={"C, Bash"}
				/>
				<ProjectPreview
				ProjectName={"so_long"}
				ProjectPic={so_long_pic}
				ProjectStack={"C, MLX42"}
				/>
				<ProjectPreview
				ProjectName={"cub3d"}
				ProjectPic={""}
				ProjectStack={"C, MLX42"}
				/>
				<ProjectPreview
				ProjectName={"webserv"}
				ProjectPic={""}
				ProjectStack={"C++, HTTP, "}
				/>
				<ProjectPreview
				ProjectName={"ft_transcendance"}
				ProjectPic={""}
				ProjectStack={"TypeScript, React, Express"}
				/>
			</div>
			<div style={{padding: "5px", backgroundColor: "#b0caa0", width: "100%", height: "20px"}}>Game Jams</div>        
			<div className="experience-block">
			<ProjectPreview
				ProjectName={"PixelForge #2"}
				ProjectPic={""}
				ProjectStack={"Godot,"}
			/>
			<ProjectPreview
				ProjectName={"CODAM Game Jam"}
				ProjectPic={""}
				ProjectStack={"Godot,"}
			/>
			</div>
			{/* <div className="experience-block">Websites</div> */}
		</div>
	);
}