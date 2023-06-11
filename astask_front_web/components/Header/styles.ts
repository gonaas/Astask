import styled from "styled-components";

export const StyledHeader = styled.header`
	background-color: #ffffff;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 1rem 0;
`;

export const HeaderContent = styled.div`
	width: 90%;
	max-width: 90rem;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Socials = styled.div`
	display: flex;
	gap: 1rem;
	img {
		cursor: pointer;
		height: 1.5rem;
		width: 1.5rem;
		border-radius: 0.3rem;
	}
`;

export const StyledRightSideHeader = styled.div`
	display: flex;
	gap: 2rem;
	align-items: center;
`;
export const StyledLeftSideHeader = styled.div``;
export const StyledMiddleSideHeader = styled.div``;

export const HeaderNavigation = styled.nav``;
