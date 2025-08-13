import './control.css';

    function BuildControl(props){
        return(
            <div className='controls'>
                <h2>Build Control</h2>

                <div className='control-row'>
                    <span className='ingredient-name'>Meat: {props.meat}</span>
                    <button onClick={props.addMeat} className='add-button'>Add Meat</button>
                    <button onClick={props.removeMeat} className='remove-button' disabled={props.meat === 0}>Remove Meat</button>
                </div>
                <div className='control-row'>
                    <span className='ingredient-name'>Cheese: {props.cheese}</span>
                    <button onClick={props.addCheese} className='add-button'>Add Cheese</button>
                    <button onClick={props.removeCheese} className='remove-button' disabled={props.cheese === 0}>Remove Cheese</button>
                </div>
                <div className='control-row'>
                    <span className='ingredient-name'>Salad: {props.salad}</span>
                    <button onClick={props.addSalad} className='add-button'>Add Salad</button>
                    <button onClick={props.removeSalad} className='remove-button' disabled={props.salad === 0}>Remove Salad</button>
                </div>
                <div className='control-row'>
                    <span className='ingredient-name'>Tomato: {props.tomato}</span>
                    <button onClick={props.addTomato} className='add-button'>Add Tomato</button>
                    <button onClick={props.removeTomato} className='remove-button' disabled={props.tomato === 0}>Remove Tomato</button>
                </div>

                <button className='order-button'>ORDER NOW</button>
            </div>
        )
    }