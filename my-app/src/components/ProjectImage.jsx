
/* return an image resized based on whether the input image was narrower than the required
ratio or not.
*/
export default function ProjectImage({ ProjectPic, PicNarrow }){
	
	if (PicNarrow) {
		return (<img className={`preview-img preview-img-narrow`} alt="project preview" src={ProjectPic} />);
	}
	return (<img className={`preview-img`} alt="project preview" src={ProjectPic} />);
	
}
