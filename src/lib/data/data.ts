import { Eye, GitCompareArrows, Heart, ShoppingBag } from 'lucide-svelte';

import type { TProductProps } from '../../types';

export const stars = [
	{ id: 1, title: 'One Star' },
	{ id: 2, title: 'Two Stars' },
	{ id: 3, title: 'Three Stars' },
	{ id: 4, title: 'Four Stars' },
	{ id: 5, title: 'Five Stars' }
];

export const tabData = [
	{
		label: 'All',
		value: 'all',
		data: Array(5)
	},
	{ label: 'Snack & Spices', value: 'snacks', data: Array(2) },
	{ label: 'Fruits', value: 'fruits', data: Array(3) },
	{ label: 'Vegetables', value: 'vegetables', data: Array(8) }
];

export const headerMenu = [
	{
		name: 'Home',
		href: '/'
	},
	{
		name: 'Category',
		href: '/category'
	},
	{
		name: 'About us',
		href: '/about'
	},
	{
		name: 'Contact us',
		href: '/contact'
	}
];

export const carouselData = [
	{
		highlightText: 'Healthy',
		lastText: '& Fresh Fruits'
	},
	{
		highlightText: 'Warm',
		lastText: 'Fast Food & Snacks'
	},
	{
		highlightText: 'Organic',
		lastText: '& Fresh Vegetable'
	}
];

export const categoryData = [
	{
		color: 'bg-green-200',
		category: 'Fruits',
		amount: 222,
		url: '/svg/category/1.svg'
	},
	{ color: 'bg-purple-200', category: 'Cold Drinks', amount: 22, url: '/svg/category/2.svg' },
	{ color: 'bg-yellow-200', category: 'Bakery', amount: 22, url: '/svg/category/3.svg' },
	{ color: 'bg-red-200', category: 'Vegetables', amount: 22, url: '/svg/category/4.svg' }
];

export const serviceData = [
	{
		title: 'Free Shipping',
		description: 'Free shipping on all Us order or above $200'
	},
	{
		title: '24x7 Support',
		description: 'Contact us 24 hours a day, 7 days a week'
	},
	{ title: '30 Days Return', description: 'Simply return it within 30 days for an exchange' },
	{ title: 'Payment Secure', description: 'Contact us 24 hours a day, 7 days a week' }
];

export const vendorData = [
	{
		name: 'Mira Fashion Pvt. Ltd.',
		sales: 555,
		categories: [
			{
				name: 'Fruits',
				amount: 22
			},
			{
				name: 'Vegetables',
				amount: 22
			},
			{
				name: 'Snacks',
				amount: 22
			}
		]
	},
	{
		name: 'Eelna Fashion Pvt. Ltd.',
		sales: 555,
		categories: [
			{
				name: 'Fruits',
				amount: 22
			},
			{
				name: 'Vegetables',
				amount: 22
			},
			{
				name: 'Snacks',
				amount: 22
			}
		]
	},
	{
		name: 'Mario Fashion Pvt. Ltd.',
		sales: 555,
		categories: [
			{
				name: 'Fruits',
				amount: 22
			},
			{
				name: 'Vegetables',
				amount: 22
			},
			{
				name: 'Snacks',
				amount: 22
			}
		]
	},
	{
		name: 'Maria Fashion Pvt. Ltd.',
		sales: 555,
		categories: [
			{
				name: 'Fruits',
				amount: 22
			},
			{
				name: 'Vegetables',
				amount: 22
			},
			{
				name: 'Snacks',
				amount: 22
			}
		]
	}
];

export const actionsProduct = [
	{
		name: 'Wishlist',
		icon: Heart
	},
	{
		name: 'Quick View',
		icon: Eye
	},
	{
		name: 'Compare',
		icon: GitCompareArrows
	},
	{
		name: 'Add To Cart',
		icon: ShoppingBag
	}
];

export const product: TProductProps = {
	id: 1,
	name: 'Ground Nuts Oil Pack 52g',
	price: 52,
	rating: 4,
	image: [],
	weightOptions: [
		{
			weight: 500,
			unit: 'g'
		},
		{
			weight: 1,
			unit: 'kg'
		}
	],
	type: 'Snacks',
	quantity: 100,
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptatum. Vitae dolores alias repellat eligendi, officiis, exercitationem corporis quisquam delectus cum non',
	sku: 'WH12',
	status: 'Sale',
	discount: 30
};

export const infoData = [
	{ label: 'Weight', value: '500 g' },
	{ label: 'Dimensions', value: '17 × 15 × 3 cm' },
	{ label: 'Color', value: 'black,yellow,red' },
	{ label: 'Brand', value: 'Wonder Fort' },
	{ label: 'Quantity', value: 50 }
];
