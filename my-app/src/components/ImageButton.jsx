/** Buttons with an image instead of text */

export default function ImageButton({ buttonLink, buttonImg, buttonAlt }){
	return (
		<a href={buttonLink}>
			<button className="img-button">
				<img src={buttonImg} alt={buttonAlt} style={{width: "70px", filter: "brightness(0%) invert(1)"}}></img>
			</button>
		</a>
	);
}
