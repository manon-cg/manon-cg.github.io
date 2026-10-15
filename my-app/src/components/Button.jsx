/** Buttons to link github & linkedin */

export default function Button({ buttonText, buttonLink }){
	return (
		<a href={buttonLink}>
			<button className="my-button">
				{buttonText}
			</button>
		</a>
	);

}