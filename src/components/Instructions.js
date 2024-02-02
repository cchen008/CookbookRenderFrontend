import './Instructions.css';
import Modal from './Modal';
import RecipeService from '../services/RecipeService';
import { useState } from 'react';

const Instructions = ({instructions, edit, recipeId, refresh}) => {
    const [addModal, setAddModal] = useState("none");
    const [editModal, setEditModal] = useState("none");
    const [addInput, setAddInput] = useState("");
    const [editInput, setEditInput] = useState("");
    const [selectedId, setSelectedId] = useState(0);

    const handleAddClick = () => {
        setAddModal("");
    }

    const handleEditClick = (currentInstruction) => {
        setEditInput(currentInstruction.step);
        setSelectedId(currentInstruction.id);
        setEditModal("");
    }
    
    const handleDeleteClick = async (instructionId) => {
        await RecipeService.removeInstruction(recipeId, instructionId);
        refresh(recipeId);
    }

    const handleCloseButton = (setInput, setModal) => {
        setInput("");
        setModal("none");
    }

    const handleAddInstructionChange = (e) => {
        setAddInput(e.target.value);
        console.log(addInput);
    }

    const handleEditInstructionChange = (e) => {
        setEditInput(e.target.value);
        console.log(editInput);
    }

    const onAddConfirmClick = async() => {
        const instruction = {
            step: addInput
        }
        await RecipeService.addInstruction(recipeId, instruction);
        refresh(recipeId)
        setAddModal("none");
        setAddInput("");
        console.log(instruction);
    }

    const onEditConfirmClick = async(ingredientId) => {
        const instruction = {
            step: editInput
        }
        await RecipeService.updateInstruction(recipeId, ingredientId, instruction);
        refresh(recipeId);
        setEditModal("none");
    }


    const addInstructionMessage = <>
        <h2 className='add-instruction-message'>Add instruction</h2>
        Instruction: <input type="text" onChange={handleAddInstructionChange} value={addInput} />
    </>

    const editInstructionMessage = <>
        <h2 className='edit-ingredient-message'>Edit ingredient</h2>
        Instruction: <input type="text" onChange={handleEditInstructionChange} value={editInput} />
    </>

    if(edit) {
        return (
            <>
                <div className="instruction-container">
                    <h2 className="instruction-title">
                        Instructions
                        <button onClick={handleAddClick}>Add</button>
                    </h2>
                    <ol>
                        {instructions.map((step) => 
                            <li key={step.id} className="steps">
                                {step.step}
                                <button onClick={() => handleEditClick(step)}>Edit</button>
                                <button onClick={() => handleDeleteClick(step.id)}>Delete</button>
                            </li>
                        )}
                    </ol>
                </div>
                <Modal show={addModal} toggle={() => handleCloseButton(setAddInput, setAddModal)} message={addInstructionMessage} handleClick={onAddConfirmClick} />
                <Modal show={editModal} toggle={() => handleCloseButton(setEditInput, setEditModal)} message={editInstructionMessage} handleClick={() => onEditConfirmClick(selectedId)} />
            </>
        )
    }

    return(
        <div className="instruction-container">
            <h2 className="instruction-title">Instructions</h2>
            <ol>
                {instructions.map((step) => 
                    <li key={step.id} className="steps">{step.step}</li>
                )}
            </ol>
        </div>
    )
}

export default Instructions;