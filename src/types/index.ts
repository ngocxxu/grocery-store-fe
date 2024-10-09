export type TProductProps = {
	id: number;
	name: string;
	price: number;
	rating: number;
	image: string[];
	weightOptions: TWeightOption[];
	type: string;
	quantity: number;
	description: string;
	sku: string;
	status: string;
	discount: number;
};

export type TUnit = {
	id: string;
	name: string;
	abbreviation: string;
};

export type TWeightOption = {
	id: string;
	weight: number;
	unit: TUnit;
};

export type TLoadData = {
	productsAPI: TProductProps[];
};
