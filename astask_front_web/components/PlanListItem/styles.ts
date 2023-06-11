import styled from "styled-components";

export const StyledPlanListItem = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2rem;
	justify-content: flex-start;
	align-items: flex-start;
	height: 20rem;
	width: 100%;
	padding: 2rem;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	border-radius: 1.5rem;
`;

export const StyledImageContainer = styled.div`
	width: 100%;
	max-width: 15rem;
	height: 100%;
`;

export const StyledPlanInfoContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

export const ImageWrapper = styled.div`
	height: 100%;
	width: 100%;
	min-width: 15rem;
	background-position: center;
	background-size: cover;
	border-radius: 1.5rem;
`;

export const RecommendedPeopleNumber = styled.div`
	display: flex;
	align-items: center;
	margin-left: -0.5rem;
	gap: -0.2rem;
	color: #999999;
	img {
		height: 1.5rem;
		width: 1.5rem;
	}
`;

export const PlanDuration = styled.div`
	display: flex;
	align-items: center;
	margin-left: -0.2rem;
	gap: 0.3rem;
	img {
		height: 1.1rem;
		width: 1.1rem;
	}
`;

export const GoButtonContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
