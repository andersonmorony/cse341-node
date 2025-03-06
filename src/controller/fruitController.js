import {fruitService} from '../services/fruitService.js';
import Fruit from '../models/fruitModel.js';

// Add your controller methods here
async function getFruitsController(req, res) {
    try {
        const fruitData = await fruitService.getFruit();
        return fruitData;
    } catch (error) {
        console.log('Failed to get fruit' & error);
    }
}

async function createFruitController(req, res) {
    try {
        const {name, description, price} = req.body;
        const fruitData = new Fruit(name, description, price);
        const response = await fruitService.createFruit(fruitData);
        return response;
    } catch (error) {
        console.log('Failed to create fruit' & error);
        res.json({message: error.message, status: 400});
    }
}

export {getFruitsController, createFruitController};
