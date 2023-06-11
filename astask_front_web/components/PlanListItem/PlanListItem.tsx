import React from "react";
import {
	StyledPlanListItem,
	PlanListItemTitle,
	PlanListItemDescription
} from "./styles";
import { IProject } from "../../types";
import { useRouter } from "next/router";

interface Props {
	project: IProject;
}

const PlanListItem: React.FC<Props> = ({project}) => {
	const router = useRouter();

	const openProject = () => {
		router.push(`/project/${project?.uuid}`)
	}

	return (
		<StyledPlanListItem onClick={openProject}>
			<PlanListItemTitle>{project?.name}</PlanListItemTitle>
			<PlanListItemDescription>{project?.description ?? ""}</PlanListItemDescription>
		</StyledPlanListItem>
	);
};

export default PlanListItem;
