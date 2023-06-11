import React, {useState, useEffect} from "react";
import { StyledFeed, StyledPlanList } from "./styles";
import PlanListItem from "../PlanListItem/PlanListItem";
import { IProject, IItem } from "../../types";

interface Props {}

const PlanFeed: React.FC<Props> = () => {
	const [projects, setProjects] = useState<IProject[]>();


	useEffect(() => {
		//TODO: connect to db/backend
		/*axios.get('http://locahost:3002/api/project-s', {}).then(res => {
		}).catch(err => {
			alert("error getting the projects from the database")
		})*/

		let mockedProjects: IProject[] = [
			{ name: "Arkey",uuid: "1234567899", description: "Nice ass project" },
			{ name: "Planitfy", uuid: "9878654321", description: "Planitfy was destined to fail" },
		]

		setProjects(mockedProjects);
	}, [])

	return (
		<StyledFeed>
			<h1>Tus Proyectos</h1>
			<StyledPlanList>
				{projects?.map((project, index) => (
					<PlanListItem key={index} project={project} />
				))}
			</StyledPlanList>
		</StyledFeed>
	);
};

export default PlanFeed;
