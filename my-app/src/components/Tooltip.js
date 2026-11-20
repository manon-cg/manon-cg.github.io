import { useState } from "react";
import React from "react";

// todo: add direction param if i need multiple options
const Tooltip = ({ content, children }) => {
	const [visible, setVisible] = useState(false);

	const showTooltip = () => setVisible(true);
	const hideTooltip = () => setVisible(false);

	return (
		// add className
		<div className="tooltip-container"
			onMouseEnter={showTooltip}
			onMouseLeave={hideTooltip}>
		{visible && <div className={`tooltip-box tooltip`}>
			{content}
			</div>}
			{children}
		</div>
	);
};

export default Tooltip;
