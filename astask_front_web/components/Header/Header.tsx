import React from "react";
import Image from "next/image";
import {
	HeaderNavigation,
	StyledHeader,
	StyledLeftSideHeader,
	StyledMiddleSideHeader,
	StyledRightSideHeader,
	Socials,
	HeaderContent,
} from "./styles";
import { InstagramIcon, TwitterIcon, TiktokIcon } from "../icons/Icons";
import HeaderSearchBar from "../HeaderSearchBar/HeaderSearchBar";

interface Props {}

const Header: React.FC<Props> = () => {
	return (
		<StyledHeader>
			<HeaderContent>
				<StyledLeftSideHeader>
					<div>
					<Socials>

					</Socials>
						<a
							style={{
								fontWeight: "bold",
								fontSize: "2rem",
							}}
						>
							Astask
						</a>
					</div>
				</StyledLeftSideHeader>
				<StyledRightSideHeader>
					<HeaderSearchBar />
					<Socials>
					</Socials>
				</StyledRightSideHeader>
			</HeaderContent>
		</StyledHeader>
	);
};

export default Header;
