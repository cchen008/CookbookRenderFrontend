import Header from './Header';
import RecipeTime from './RecipeTime';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import './Recipe.css';
//import { useEffect } from 'react';
import NavBar from './NavBar';

const Recipe = ({title, time, ingredients, instructions, edit, refresh, loading}) => {
    if(loading) {
        return(
            <div>Loading please wait</div>
        )
    }

    return(
        <>
            <NavBar />
            <div className="recipe">
                <Header id={title.id} name={title.name} description={title.description} edit={edit} refresh={refresh} />
                <RecipeTime time={time} edit={edit} refresh={refresh} recipeId={title.id} />
                <Ingredients ingredients={ingredients} edit={edit} refresh={refresh} id={title.id} />
                <Instructions instructions={instructions} edit={edit} refresh={refresh} recipeId={title.id} />
            </div>
        </>
    );
}

export default Recipe;