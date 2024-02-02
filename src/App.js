import { useState } from 'react';
import Recipe from './components/Recipe';
import RecipeList from './components/RecipeList';
import About from './components/About';
import { useEffect } from 'react';
import RecipeService from './services/RecipeService';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [recipe, setRecipe] = useState({title: '', time: '', ingredients: [], instructions: []});
  const [showModal, setShowModal] = useState("none");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipeList();
  }, []);

  const fetchRecipeList = async () => {
    const response = await RecipeService.getAllRecipes();
    console.log(response);
    setAllRecipes(response);
  }

  const fetchRecipe = async (id) => {
    const recipeData = await RecipeService.getRecipe(id);
    const recipeTime = await RecipeService.getRecipeTime(id);
    const recipeIngredients = await RecipeService.getRecipeIngredients(id);
    const recipeInstructions = await RecipeService.getRecipeInstructions(id);
    setRecipe({title: recipeData, time: recipeTime, ingredients: recipeIngredients, instructions: recipeInstructions});
    setLoading(false);
  }
 
  const toggleModal = () => {
    if(showModal === "none") {
      setShowModal("");
    }
    else {
      setShowModal("none");
    }
  }

  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<RecipeList recipes={allRecipes} refresh={fetchRecipeList} fetchRecipe={fetchRecipe} toggle={toggleModal} show={showModal} />} />
        <Route path={`/recipe/*`} element={<Recipe title={recipe.title} time={recipe.time} ingredients={recipe.ingredients} instructions={recipe.instructions} edit={false} refresh={fetchRecipe} loading={isLoading}/>}  />
        {/* {${recipe.title.id}} */}
        <Route path={`/recipe/edit/${recipe.title.id}`} element={<Recipe title={recipe.title} time={recipe.time} ingredients={recipe.ingredients} instructions={recipe.instructions} edit={true} refresh={fetchRecipe} loading={isLoading}/>}  />
        {/* <Route path="*" element={<NoMatch />} /> */}
        <Route path={`/about`} element={<About />} />
        {/* <Route path="*" element={<div> Not Found or you do not have permission.</div>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
