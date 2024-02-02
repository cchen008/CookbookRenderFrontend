import axios from "axios";

const RECIPE_REST_API_URL = "https://spring-render-hpw3.onrender.com/api/v1/recipes";

const getAllRecipes = () => {
    return axios.get(RECIPE_REST_API_URL)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
            return [];
        });
}

const getRecipe = (id) => {
    return axios.get(`${RECIPE_REST_API_URL}/${id}`)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
        });
}

const getRecipeTime = (id) => {
    return axios.get(`${RECIPE_REST_API_URL}/${id}/time`)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
        });
}

const getRecipeIngredients = (id) => {
    return axios.get(`${RECIPE_REST_API_URL}/${id}/ingredients`)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
        });
}

const getRecipeInstructions = (id) => {
    return axios.get(`${RECIPE_REST_API_URL}/${id}/instructions`)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
        });
}

const removeRecipe = (id) => {
    return axios.delete(`${RECIPE_REST_API_URL}/${id}`)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
        });
}

const removeIngredient = (recipeId, ingredientId) => {
    return axios.delete(`${RECIPE_REST_API_URL}/${recipeId}/ingredients/${ingredientId}`)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
        });
}

const removeInstruction = (recipeId, instructionId) => {
    return axios.delete(`${RECIPE_REST_API_URL}/${recipeId}/instructions/${instructionId}`)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
        });
}

const updateHeader = (id, newHeader) => {
    return axios.put(`${RECIPE_REST_API_URL}/${id}`, newHeader)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
        });
}

const updateRecipeTime = (id, newTime) => {
    return axios.put(`${RECIPE_REST_API_URL}/${id}/time`, newTime)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
        });
}

const updateIngredient = (recipeId, ingredientId, newIngredient) => {
    return axios.put(`${RECIPE_REST_API_URL}/${recipeId}/ingredients/${ingredientId}`, newIngredient)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
        });
}

const updateInstruction = (recipeId, instructionId, newInstruction) => {
    return axios.put(`${RECIPE_REST_API_URL}/${recipeId}/instructions/${instructionId}`, newInstruction)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
        });
}

const addRecipe = (newRecipe) => {
    return axios.post(`${RECIPE_REST_API_URL}`, newRecipe)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
        });
}

const addIngredient = (id, newIngredient) => {
    return axios.post(`${RECIPE_REST_API_URL}/${id}/ingredients`, newIngredient)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
        });
}

const addInstruction = (id, newInstruction) => {
    return axios.post(`${RECIPE_REST_API_URL}/${id}/instructions`, newInstruction)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
        });
}

const addRecipeTime = (recipeId, newTime) => {
    return axios.post(`${RECIPE_REST_API_URL}/${recipeId}/time`, newTime)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
        });
}


const exportedObject = { 
    getAllRecipes, 
    getRecipe, 
    getRecipeTime, 
    getRecipeIngredients, 
    getRecipeInstructions, 
    removeRecipe,
    removeIngredient,
    removeInstruction,
    updateHeader,
    updateRecipeTime,
    updateIngredient,
    updateInstruction,
    addRecipe,
    addIngredient,
    addInstruction,
    addRecipeTime
};

export default exportedObject;