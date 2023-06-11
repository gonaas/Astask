import React, { useState, useEffect } from "react";
import { StyledButton } from "../../styles/global";
import { Accommodation, Plan, Plane, PayedService } from "../../types/Plan";
import {
	GoButtonContainer,
	ImageWrapper,
	PlanDuration,
	RecommendedPeopleNumber,
	StyledImageContainer,
	StyledPlanInfoContainer,
	StyledPlanListItem,
} from "./styles";

const isAccommodation = (object: PayedService): object is Accommodation => {
	return Object.keys(object).indexOf("night_price") > -1;
};
const isPlane = (object: PayedService): object is Plane => {
	return Object.keys(object).indexOf("flight_code") > -1;
};

interface Props {
	plan: Plan;
	lastIndex: number;
	currentIndex: number;
}

const PLACEHOLDER_IMAGE: string = "https://endosclick.es/wp-content/uploads/2019/04/placeholder-image.jpg";

const PlanListItem: React.FC<Props> = ({ plan }) => {
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [curatedPlanNames, setCuratedPlanNames] = useState<string>("");

	useEffect(() => {
		// Calculate total price
		let price = 0;

		plan.payed_services.forEach((payed_service: Accommodation | Plane) => {
			price += payed_service.total_price;
		});
		setTotalPrice(price);

		let locationNames: string[] = plan.locations.map<string>(value => value.name!);
		setCuratedPlanNames(locationNames.filter((value, index) => locationNames.indexOf(value) === index).join(", "));
	}, [plan]);

	return (
		<StyledPlanListItem>
			<StyledImageContainer>
				<ImageWrapper style={{ backgroundImage: `url(${plan.locations[0].image ?? PLACEHOLDER_IMAGE})` }} />
			</StyledImageContainer>
			<StyledPlanInfoContainer>
				<div data-name='plan-title'>
					<h3 style={{ margin: 0 }}>{curatedPlanNames?.length > 0 ? curatedPlanNames : ""}</h3>
				</div>
				<RecommendedPeopleNumber>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src='https://www.freeiconspng.com/thumbs/person-icon/person-icon-person-icon-clipart-image-from-our-icon-clipart-category--9.png'
						alt='person icon'
					/>
					<span>x{plan.people_number_recommendation ?? "?"}</span>
				</RecommendedPeopleNumber>
				<PlanDuration>
					<img src='https://icones.pro/wp-content/uploads/2021/03/icone-d-horloge-gris.png' alt='clock icon' />
					<span style={{ color: "#999999" }}>{plan.duration ?? 1} días</span>
				</PlanDuration>
				<GoButtonContainer>
					<div data-name='plan-price'>
						<span style={{ color: "#85bb65" }}>{totalPrice === 0 ? "Este plan es gratis!" : totalPrice + " €"}</span>
					</div>
					<StyledButton>Te apuntas?</StyledButton>
				</GoButtonContainer>
			</StyledPlanInfoContainer>
		</StyledPlanListItem>
	);
};

export default PlanListItem;
