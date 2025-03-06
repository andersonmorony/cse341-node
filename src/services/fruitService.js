import { getFruits, addFruit } from '../dataAccess/fruitRepository.js';

const fruitService = {
    getFruit: async () => {
        try {
            const fruitData = await getFruits();
            return fruitData;
        } catch (error) {
            throw new Error('Failed to get fruit');
        }
    },
    createFruit: async (fruit) => {
        try {
            const response = await addFruit(fruit);
            return response;
        } catch (error) {
            throw new Error('Failed to create fruit');
        }
    }
};

export {fruitService};