// import { gql } from '@apollo/client/core';
// import client from '$lib/apollo';

// export const load = async () => {
// 	const GET_PRODUCTS = gql`
// 		query {
// 			products {
// 				id
// 				name
// 				description
// 				weightOptions {
// 					weight
// 					unit {
// 						id
// 						name
// 					}
// 				}
// 			}
// 		}
// 	`;

// 	const { data } = await client.query({ query: GET_PRODUCTS });

// 	return {
// 		productsAPI: data.products
// 	};
// };
