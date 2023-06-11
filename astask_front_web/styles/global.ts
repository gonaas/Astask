import styled from "styled-components";

export const StyledButton = styled.button`
	border-radius: 1.5rem;
	background-color: #635bff;
	color: white;
	font-size: 0.9rem;
	border: none;
	padding: 0.5rem 1rem;
	cursor: pointer;
	transition: box-shadow 0.3s ease-in-out;
	&:hover {
		box-shadow: rgba(149, 157, 165, 0.4) 5px 5px 20px;
	}
`;
