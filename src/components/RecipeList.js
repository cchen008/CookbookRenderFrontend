import DeleteOneRecipe from './DeleteOneRecipe';
import { useNavigate } from "react-router-dom";
import './RecipeList.css';
import Modal from './Modal';
import { useState } from 'react';
import RecipeService from '../services/RecipeService';
import NavBar from './NavBar';

const RecipeList = ({recipes, refresh, fetchRecipe, toggle}) => {
    const [addRecipeModal, setAddRecipeModal] = useState("none");
    const [titleInput, setTitleInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");

    const navigate = useNavigate();
    const RECIPE_PATH = "recipe";
    const EDIT_PATH = "recipe/edit";

    const handleNavigate = (id, path) => {
        fetchRecipe(id);
        console.log(id);
        console.log(path);
        navigate(`${path}/${id}`)
    }

    const recipeNameLimit = 25;
    const recipeDescriptionLimit = 40;
    const limitRecipeString = (recipeString, StringLimit) => {
        if(recipeString.length > StringLimit) {
            return recipeString.substring(0, StringLimit) + "...";
        }
        else {
            return recipeString;
        }
    }

    const handleAddRecipeClick = () => {
        setAddRecipeModal("");
    }

    const handleTitleChange = (e) => {
        setTitleInput(e.target.value);
        console.log(titleInput);
    }

    const handleDescriptionChange = (e) => {
        setDescriptionInput(e.target.value);
        console.log(descriptionInput);
    }

    const handleCloseButton = () => {
        setAddRecipeModal("none");
    }

    const handleConfirm = async () => {
        const newRecipe = {
            name: titleInput,
            description: descriptionInput
        }

        await RecipeService.addRecipe(newRecipe);
        setTimeout(() => {
            refresh();
            setAddRecipeModal("none");
        }, 100);
        console.log(newRecipe);
    }

    const addRecipeMessage = <>
        <h2 className='add-recipe'>Add a new recipe</h2>
        Recipe Name: <input type="text" onChange={handleTitleChange} value={titleInput} /> <br />
        Description: <input type="text" onChange={handleDescriptionChange} value={descriptionInput} />
    </>

    return(
        <>
            <NavBar />
            <div className="recipe-list-container">
                <button className="add-btn" onClick={handleAddRecipeClick}>Add Recipe</button>
                <table>
                    <thead>
                        <tr className="table-header">
                            <th>Recipe Name</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipes.map((recipe) => 
                                <tr key={recipe.id}>
                                    <td onClick={() => handleNavigate(recipe.id, RECIPE_PATH)}>{limitRecipeString(recipe.name, recipeNameLimit)}</td>
                                    <td onClick={() => handleNavigate(recipe.id, RECIPE_PATH)}>{limitRecipeString(recipe.description, recipeDescriptionLimit)}</td>
                                    <td>
                                        <button onClick={() => handleNavigate(recipe.id, EDIT_PATH)}>Edit</button>
                                        <DeleteOneRecipe id={recipe.id} name={recipe.name} refresh={refresh} toggle={toggle} />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <Modal show={addRecipeModal} toggle={handleCloseButton} message={addRecipeMessage} handleClick={handleConfirm} />
            </div>
        </>
    )
}

export default RecipeList;