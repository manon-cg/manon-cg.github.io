import ProjectPreview from './ProjectPreview';
import so_long_pic from '../assets/project_screencaps/so_long_screencap.png'
import minishell_pic from '../assets/project_screencaps/minishell_screencap.png'
import sf_pic from '../assets/project_screencaps/sounds_familiar_cap2.png'
import f2h_pic from '../assets/project_screencaps/f2h_screencap2.png'
import cub3d_pic from '../assets/project_screencaps/cub3d_screencap2.png'
import webserv_pic from '../assets/project_screencaps/webserv_cap.png'
import transcendence_pic from '../assets/project_screencaps/transcendence_screencap.png'
import philo_pic from '../assets/project_screencaps/philo_screencap.png'

export default function PortfolioPage(){
	return (
		<div className="all-blocks">
			<div style={{color: "white", width: "100%", alignContent: "center", textAlign: "center", justifyContent: "center", justifyItems: "center"}}><h2>CODAM Projects</h2></div>
			<div className="experience-block">
				<ProjectPreview
				ProjectName={"minishell"}
				ProjectPic={minishell_pic}
				ProjectStack={"C, Bash"}
				ProjectURL={"https://github.com/manon-cg/minishell"}
				ProjectDescription={"Team project to create a Unix shell in C that functions like Bash. Focus points were parsing command line input, process forking, I/O redirection and basic signal handling."}
				ProjNumber="0"
				PicNarrow={false}
				/>
				<ProjectPreview
				ProjectName={"cub3d"}
				ProjectPic={cub3d_pic}
				ProjectStack={"C, MLX42 (graphics library)"}
				ProjectDescription={"Team project to create a Wolfenstein-like 3D game where you can walk through a maze of blocks in first person view. Involved parsing maps, ray casting the visuals using vector mathematics, and allowing smooth player movement, using the school graphical library (MLX42)."}
				ProjNumber="1"
				PicNarrow={false}
				/>
				<ProjectPreview
				ProjectName={"so_long"}
				ProjectPic={so_long_pic}
				ProjectStack={"C, MLX42 (graphics library)"}
				ProjectDescription={"Solo project to build a 2D game in C, using the school's MLX42 graphic library. The user can load a map that will be parsed for walkability and rendered for the player, who needs to exit through the door after collecting all collectibles."}
				ProjNumber="2"
				PicNarrow={false}
				/>
				<ProjectPreview
				ProjectName={"webserv"}
				ProjectPic={webserv_pic}
				ProjectStack={"C++, HTTP, HTML/CSS"}
				ProjectDescription={"Team project to build a functioning HTTP 1.1 server in C++. This involved research into protocols and sockets, parsing of configuration files and HTTP requests, and building the correct responses following request execution."}
				ProjNumber="3"
				PicNarrow={false}
				/>
				<ProjectPreview
				ProjectName={"philosophers"}
				ProjectPic={philo_pic}
				ProjectStack={"C, multithreading"}
				// ProjectURL={""}
				ProjectDescription={"Solo project in C to implement the dining philophers problem."}
				ProjNumber="4"
				PicNarrow={true}
				/>
				<ProjectPreview
				ProjectName={"ft_transcendence"}
				ProjectPic={transcendence_pic}
				ProjectStack={"TypeScript, React, HTML, Tailwind CSS, ExpressJS, Postgres + Prisma ORM, npm"}
				ProjectURL={"https://github.com/SmokedSeaSalt/Transcendence"}
				ProjectDescription={"Team project to build a web application. We chose a multiplayer speed-typing game, where players are connected together in a room using sockets that pass their progress to each other."}
				ProjNumber="5"
				PicNarrow={false}
				/>
			</div>
			<div style={{color: "white", width: "100%", alignContent: "center", textAlign: "center", justifyContent: "center", justifyItems: "center"}}><h2>Game Jams</h2></div>
			<div className="experience-block">
			<ProjectPreview
				ProjectName={"Pixel Forge JAM #2"}
				ProjectPic={sf_pic}
				ProjectStack={"Godot, GDScript"}
				ProjectURL={"https://plutopu.itch.io/sounds-familiar"}
				ProjectDescription={"Game built with a team in Godot during a weeklong game jam."}
				ProjNumber="6"
				PicNarrow={true}
			/>
			<ProjectPreview
				ProjectName={"CODAM Game Jam"}
				ProjectPic={f2h_pic}
				ProjectStack={"Godot, GDScript"}
				ProjectURL={"https://plutopu.itch.io/farm2harm"}
				ProjectDescription={"Game built with a team in Godot during a weeklong game jam."}
				ProjNumber="7"
				PicNarrow={false}
			/>
			</div>
			{/* <div className="experience-block">Websites</div> */}
		</div>
	);
}
