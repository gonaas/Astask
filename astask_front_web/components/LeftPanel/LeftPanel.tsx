import React from "react";
import { PanelContent, StyledPanel } from "./styles";

interface Props {}

const LeftPanel: React.FC<Props> = () => {
	return (
		<StyledPanel>
			<PanelContent></PanelContent>
		</StyledPanel>
	);
};

export default LeftPanel;
