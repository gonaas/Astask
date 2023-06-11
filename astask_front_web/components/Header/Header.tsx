import React from "react";
import {
	HeaderNavigation,
	StyledHeader,
	StyledLeftSideHeader,
	HeaderContent,
} from "./styles";
import Link from 'next/link'

interface Props {}

const Header: React.FC<Props> = () => {
	return (
		<StyledHeader>
			<HeaderContent>
				<StyledLeftSideHeader>
					<div>
						<Link
							style={{
								fontWeight: "bold",
								fontSize: "2rem",
								color: 'black',
								textDecoration: 'none'
							}}
							href={"/projects"}
						>
							Astask
						</Link>
					</div>
				</StyledLeftSideHeader>
			</HeaderContent>
		</StyledHeader>
	);
};

export default Header;
