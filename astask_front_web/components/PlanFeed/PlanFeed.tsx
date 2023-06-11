import React from "react";
import { StyledFeed, StyledPlanList } from "./styles";
import { data } from "../../mockedData";
import PlanListItem from "../PlanListItem/PlanListItem";

interface Props {}

const PlanFeed: React.FC<Props> = () => {
	return (
		<StyledFeed>
			<h1>Tus Proyectos</h1>
			<StyledPlanList>
				{data.map((value, index) => (
					<PlanListItem plan={value} key={index} currentIndex={index} lastIndex={data.length - 1} />
				))}
			</StyledPlanList>
		</StyledFeed>
	);
};

export default PlanFeed;
