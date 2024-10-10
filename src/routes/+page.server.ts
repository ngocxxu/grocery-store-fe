import { gql } from '@apollo/client/core';
import client from '$lib/apollo';

import type { TProductProps } from '../types';
import type { PageServerLoad } from './$types';

type ProductsData = {
	products: TProductProps[];
};

// Query GraphQL
const GET_PRODUCTS = gql`
	query GetProducts {
		products {
			id
			name
			description
			weightOptions {
				weight
				unit {
					id
					name
				}
			}
		}
	}
`;

export const load: PageServerLoad = async () => {
	try {
		const { data } = await client.query<ProductsData>({
			query: GET_PRODUCTS
		});

		return {
			productsAPI: data.products
		};
	} catch (error) {
		console.error('Error fetching products:', error);
		return {
			status: 500,
			error: new Error('Failed to fetch products')
		};
	}
};
