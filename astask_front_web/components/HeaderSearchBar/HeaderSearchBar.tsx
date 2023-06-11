import React from "react";
import { StyledSearchBar } from "./styles";

interface Props {}

const HeaderSearchBar: React.FC<Props> = () => {
	return <StyledSearchBar placeholder='Busca un proyecto...' />;
};

export default HeaderSearchBar;
