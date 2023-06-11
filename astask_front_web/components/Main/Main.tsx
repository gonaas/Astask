import React from "react";
import LeftPanel from "../LeftPanel/LeftPanel";
import PlanFeed from "../PlanFeed/PlanFeed";
import RightPanel from "../RightPanel/RightPanel";
import { StyledMain } from "./styles";

interface Props {}

const Main: React.FC<Props> = () => {
	return (
		<StyledMain>
			<LeftPanel />
			<PlanFeed />
			<RightPanel />
		</StyledMain>
	);
};

export default Main;
