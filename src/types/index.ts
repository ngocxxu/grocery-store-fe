export type TProductProps = {
	id: number;
	name: string;
	price: number;
	rating: number;
	image: string[];
	weightOptions: { weight: number; unit: string }[];
	type: string;
	quantity: number;
	description: string;
	sku: string;
	status: string;
	discount: number;
};
