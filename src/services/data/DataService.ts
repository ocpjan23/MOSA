import ProductDetails from "model";

export const DatarService = {
    getData: async (): Promise<ProductDetails[]> => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            return data['products'];
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    },
};