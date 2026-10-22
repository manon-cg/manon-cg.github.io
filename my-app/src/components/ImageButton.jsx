/** Buttons with an image instead of text */

export default function ImageButton({ buttonLink, buttonImg }){
	return (
		<a href={buttonLink}>
			<button className="img-button">
				<img src={buttonImg} style={{width: "100px", filter: "brightness(0%) invert(1)"}}></img>
			</button>
		</a>
	);
}