import styled from "styled-components";

export const StyledPlanListItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	height: 9rem;
	max-width: 40rem;
	width: 90%;
	padding: 2rem;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	border-radius: 1.5rem;
	cursor: pointer;
`;

export const PlanListItemTitle = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
`;

export const PlanListItemDescription = styled.div`
	font-size: .8rem;
	font-weight: normal;
`;



export const GoButtonContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
