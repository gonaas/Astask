import React, {useState, useEffect} from "react";
import { StyledFeed, StyledPlanList } from "./styles";
import PlanListItem from "../PlanListItem/PlanListItem";
import { IProject, IItem } from "../../types";
import { useRouter } from "next/router";
import axios from "axios";

interface Props {}

const PlanFeed: React.FC<Props> = () => {
	const router = useRouter()
	const [projects, setProjects] = useState<IProject[]>();

	useEffect(() => {
		// check if the user is logged in
		if(!localStorage.getItem('token')) {
			router.push('/')
		}

		let token = localStorage.getItem('token') ?? "";

		axios.get('http://localhost:3002/api/project-s', {
			headers: {
				token: token
			}
		}).then(res => {
			if (res.data.status === 'success' && res.data.data) {
				let projects = res.data.data;
				setProjects(projects)
			} else {
				alert('error getting projecgts')
				setProjects([])
			}
		}).catch(err => {
			alert('error getting projecgts')
			setProjects([])
		})
	}, [])

	return (
		<StyledFeed>
			<h1>Tus Proyectos</h1>
			<div>
				<button onClick={() => {
					router.push('/project/add')
				}}>Add proyecto</button>
			</div>
			<br />
			<StyledPlanList>
				{projects?.map((project, index) => (
					<PlanListItem key={index} project={project} />
				))}
			</StyledPlanList>
		</StyledFeed>
	);
};

export default PlanFeed;
