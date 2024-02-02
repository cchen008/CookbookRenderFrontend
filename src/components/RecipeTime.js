import { useState } from 'react';
import './RecipeTime.css';
import Modal from './Modal';
import RecipeService from '../services/RecipeService';

const RecipeTime = ({time, edit, refresh, recipeId}) => {
    if(time === "") {
        time = {
            prepTime: 0,
            cookTime: 0
        }
    }
    const [prepTime, setPrepTime] = useState(time.prepTime);
    const [cookTime, setCookTime] = useState(time.cookTime);
    const [timeModal, setTimeModal] = useState("none");

    const totalTime = time.prepTime + time.cookTime;

    const handlePrepTimeChange = (e) => {
        setPrepTime(e.target.value);
    }

    const handleCookTimeChange = (e) => {
        setCookTime(e.target.value);
    }

    const handleTimeClick = () => {
        setTimeModal("");
    }

    const handleCloseButton = () => {
        setPrepTime(time.prepTime);
        setCookTime(time.cookTime);
        setTimeModal("none");
    }

    const handleConfirm = async() => {
        const newPrepTime = Number(prepTime);
        const newCookTime = Number(cookTime);

        if(Number.isInteger(newPrepTime) && Number.isInteger(newCookTime) && newPrepTime >= 0 && newCookTime >= 0) {
            const newTime = {
                prepTime: newPrepTime,
                cookTime: newCookTime
            }

            if(time.prepTime === 0 || time.cookTime === 0) {
                await RecipeService.addRecipeTime(recipeId, newTime);
            }
            else {
                await RecipeService.updateRecipeTime(recipeId, newTime);
            }
            refresh(recipeId);
            setTimeModal("none");
        }
        else {
            console.log("Please enter a whole number preptime and cook time");
        }
    }

    const prepTimeMessage = <>
        <h2 className='edit-recipe-time-name'>Edit prep time and cook time</h2>
        {/* <p>Please enter whole numbers</p> */}
        Prep time &#40;minutes&#41;: <input type="text" onChange={handlePrepTimeChange} value={(prepTime)} /> <br />
        Cook time &#40;minutes&#41;: <input type="text" onChange={handleCookTimeChange} value={cookTime} />
    </>

    if(edit) {
        return (
            <>
                <p className="prep-time" onClick={handleTimeClick}>
                    <span className="time-keyword">Prep time:</span> {time.prepTime == null ? prepTime: time.prepTime} minutes |&nbsp;
                    <span className="time-keyword">Cook time:</span> {time.cookTime == null ? cookTime: time.cookTime} minutes |&nbsp;
                    <span className="time-keyword">Total time:</span> {totalTime} minutes
                </p>
                <Modal show={timeModal} toggle={handleCloseButton} message={prepTimeMessage} handleClick={handleConfirm} />
            </>
        )
    }

    return(
        <div>
            <p className="prep-time">
                <span className="time-keyword">Prep time:</span> {time.prepTime} minutes |&nbsp;
                <span className="time-keyword">Cook time:</span> {time.cookTime} minutes |&nbsp;
                <span className="time-keyword">Total time:</span> {totalTime} minutes 
            </p>
        </div>
    )
}

export default RecipeTime;