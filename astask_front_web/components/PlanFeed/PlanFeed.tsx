import React, {useState, useEffect} from "react";
import { StyledFeed, StyledPlanList } from "./styles";
import PlanListItem from "../PlanListItem/PlanListItem";
import axios from 'axios'

interface Props {}

const PlanFeed: React.FC<Props> = () => {
	const [data, setData] = useState<{}>();


	useEffect(() => {
		axios
	}, [])

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
