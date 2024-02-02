import Modal from "./Modal";
import RecipeService from "../services/RecipeService";
import { useState } from "react";

const DeleteOneRecipe = ({id, name, refresh, toggle, show}) => {
    const [deleteModal, setDeleteModal] = useState('none');

    const deleteMessage = <p>Are you sure you want to remove the <span className='recipe-name-modal'>{name}</span> recipe?"</p>

    const handleDeleteClick = () => {
        setDeleteModal("");
    }

    const handleClose = () => {
        setDeleteModal("none");
    }

    const handleClick = async () => {
        await RecipeService.removeRecipe(id);
        refresh();
        toggle();
    }

    return(
        <>
            <button onClick={handleDeleteClick}>Delete</button>
            <Modal show={deleteModal} id={id} toggle={handleClose} handleClick={handleClick} message={deleteMessage} />
        </>
    )
}

export default DeleteOneRecipe;