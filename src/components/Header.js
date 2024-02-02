import Modal from './Modal';
import './Header.css';
import { useState } from 'react';
import RecipeService from '../services/RecipeService';

const Header = ({id, name, description, edit, refresh}) => {
    const [titleInput, setTitleInput] = useState(name);
    const [descriptionInput, setDescriptionInput] = useState(description);
    const [headerModal, setHeaderModal] = useState("none");

    const handleTitleChange = (e) => {
        setTitleInput(e.target.value);
        console.log(titleInput);
    }

    const handleDescriptionChange = (e) => {
        setDescriptionInput(e.target.value);
        console.log(descriptionInput);
    }

    const handleCloseButton = () => {
        setTitleInput(name);
        setDescriptionInput(description);
        setHeaderModal("none");
    }

    const handleConfirm = async () => {
        const newHeader = {
            name: titleInput,
            description: descriptionInput
        }

        await RecipeService.updateHeader(id, newHeader);
        refresh(id);
        setHeaderModal("none");
        console.log(newHeader);
    }

    const handleTitleDescriptionClick = () => {
        setHeaderModal("");
    }

    const headerMessage = <>
        <h2 className='edit-recipe-name-message'>Edit recipe name and description</h2>
        Recipe Name: <input type="text" onChange={handleTitleChange} value={titleInput} /> <br />
        Description: <input type="text" onChange={handleDescriptionChange} value={descriptionInput} />
    </>

    if(edit) {
        return (
            <>
                <div onClick={handleTitleDescriptionClick}>
                    <h1 className="recipe-name" >{name}</h1>
                    <p className="recipe-description">{description}</p>
                </div>
                <Modal show={headerModal} toggle={handleCloseButton} message={headerMessage} handleClick={handleConfirm} />
            </>
        )
    }

    return(
        <div>
            <h1 className="recipe-name">{name}</h1>
            <p className="recipe-description">{description}</p>
        </div>
    );
}

export default Header;