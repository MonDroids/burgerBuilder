import { useState } from 'react';
import './control.css';

function BuildControl() {
    const [ingredients, setIngredients] = useState({
        salad: 0,
        tomato: 0,
        cheese: 0,
        meat: 0
    });

    const addIngredient = (type) => {
        setIngredients((prevIngredients) => ({
            ...prevIngredients,
            [type]: prevIngredients[type] + 1
        }));
    };

    const removeIngredient = (type) => {
        setIngredients((prevIngredients) => ({
            ...prevIngredients,
            [type]: Math.max(prevIngredients[type] - 1)
        }));
    };

    // You can return some JSX here if needed
    return (
        <div className='controls'>
            <div>
                <span>Max: {ingredients.meat}</span>
                <button onClick={() => addIngredient('meat')}>Add Meat</button>
                <button onClick={() => removeIngredient('meat')} disabled={ingredients.meat === 0}>Remove Meat</button>
            </div>
            <div>
                <span>Max: {ingredients.cheese}</span>
                <button onClick={() => addIngredient('cheese')}>Add Cheese</button>
                <button onClick={() => removeIngredient('cheese')} disabled={ingredients.cheese === 0}>Remove Cheese</button>
            </div>
            <div>
                <span>Max: {ingredients.salad}</span>
                <button onClick={() => addIngredient('salad')}>Add Salad</button>
                <button onClick={() => removeIngredient('salad')} disabled={ingredients.salad === 0}>Remove Salad</button>
            </div>
            <div>
                <span>Max: {ingredients.tomato}</span>
                <button onClick={() => addIngredient('tomato')}>Add Tomato</button>
                <button onClick={() => removeIngredient('tomato')} disabled={ingredients.tomato === 0}>Remove Tomato</button>
            </div>
        </div>
    );
}