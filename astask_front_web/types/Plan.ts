export interface Location {
	search_value?: string;
	country: string;
	city: string;
	name?: string;
	image?: string;
	isBusiness: boolean;
	latitude: number;
	longitude: number;
	street?: string;
	street_number?: number;
	flat?: number;
	door?: number;
}

export interface PayedService {
	total_price: number;
}

export interface Plane extends PayedService {
	flight_code: string;
	date: Date;
	time: Date;
	duration: number;
}

export interface Time {
	start_date: Date;
	stop_date: Date;
}

export interface Accommodation extends PayedService, Location {
	night_price: number;
	nights: number;
}

export interface Plan {
	locations: Location[];
	people_number_recommendation: number;
	people_number?: number;
	duration: number;
	payed_services: Array<Accommodation | Plane>;
}
