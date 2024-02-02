import { useState } from 'react';
import './Ingredients.css';
import Modal from './Modal';
import RecipeService from '../services/RecipeService';

const Ingredients = ({ingredients, edit, id, refresh}) => {
    const [addIngredientModal, setAddIngredientModal] = useState("none");
    const [updateIngredientModal, setUpdateIngredientModal] = useState("none");
    const [addInput, setAddInput] = useState("");
    const [editInput, setEditInput] = useState("");
    const [selectedId, setSelectedId] = useState(0);

    const handleAddIngredientChange = (e) => {
        setAddInput(e.target.value);
        console.log(addInput);
    }

    const handleEditIngredientChange = (e) => {
        setEditInput(e.target.value);
        console.log(editInput);
    }

    const handleAddClick = () => {
        setAddIngredientModal("");
    }

    const handleEditClick = (currentIngredient) => {
        setEditInput(currentIngredient.ingredient);
        setSelectedId(currentIngredient.id);
        setUpdateIngredientModal("");
    }

    const handleCloseButton = (setInput, setModal) => {
        setInput("");
        setModal("none");
    }

    const handleAddConfirm = async() => {
        const newIngredient = {
            ingredient: addInput
        }

        await RecipeService.addIngredient(id, newIngredient);
        refresh(id);
        setAddIngredientModal("none");
        setAddInput("");
        console.log(newIngredient);
    }

    const handleEditConfirm = async(ingredientId) => {
        const newIngredient = {
            ingredient: editInput
        }

        await RecipeService.updateIngredient(id, ingredientId, newIngredient);
        refresh(id);
        setUpdateIngredientModal("none");
        console.log(newIngredient);
    }

    const handleDelete = (ingredientId) => {
        RecipeService.removeIngredient(id, ingredientId);
        refresh(id);
    }

    const addIngredientMessage = <>
        <h2 className='add-ingredient-message'>Add ingredient</h2>
        Ingredient: <input type="text" onChange={handleAddIngredientChange} value={addInput} />
    </>

    const updateIngredientMessage = <>
        <h2 className='edit-ingredient-message'>Edit ingredient</h2>
        Ingredient: <input type="text" onChange={handleEditIngredientChange} value={editInput} />
    </>

    if(edit) {
        return (
            <div className="ingredient-container">
                <h2 className="ingredient-title">
                    Ingredients 
                    <button onClick={handleAddClick}>Add</button>
                </h2>
                <div className="ingredient-list">
                    {ingredients.map((ingredient) =>
                    <div key={ingredient.id}>
                        <input type="checkbox" id={ingredient.id} />
                        <label>{ingredient.ingredient}
                            <span>
                                <button onClick={() => handleEditClick(ingredient)}>Edit</button>
                                <button onClick={() => handleDelete(ingredient.id)}>Delete</button>
                            </span>
                        </label>
                    </div> 
                    )}
                </div>
                <Modal show={addIngredientModal} toggle={() => handleCloseButton(setAddInput, setAddIngredientModal)} message={addIngredientMessage} handleClick={handleAddConfirm} />
                <Modal show={updateIngredientModal} toggle={() => handleCloseButton(setEditInput, setUpdateIngredientModal)} message={updateIngredientMessage} handleClick={() => handleEditConfirm(selectedId)} />
            </div>
        )
    }

    return(
        <div className="ingredient-container">
            <h2 className="ingredient-title">Ingredients</h2>
            <div className="ingredient-list">
                {ingredients.map((ingredient) =>
                <div key={ingredient.id}>
                    <input type="checkbox" id={ingredient.id} />
                    <label>{ingredient.ingredient}</label>
                </div> 
                )}
            </div>
        </div>
    )
}

export default Ingredients;