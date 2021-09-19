import { dbService, storageService } from "fbase";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import "styles/mainstyles.css";

const Thinkey = ({ thinkeyObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newThinkey, setNewThinkey] = useState(thinkeyObj.text);

    const onDeleteClick = async () => {
        const ok = window.confirm("삭제하시겠습니까?");
        if(ok) {
            await dbService.doc(`thinkey/${thinkeyObj.id}`).delete();
            if(thinkeyObj.attachmentUrl !== "") {
                await storageService.refFromURL(thinkeyObj.attachmentUrl).delete();
            }
        }
    };

    const toggleEditing = () => setEditing((prev) => !prev);

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewThinkey(value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`thinkey/${thinkeyObj.id}`).update({ text: newThinkey });
        setEditing(false);
    };

    return (
        <div className="thinkey">
            {editing ? (
                <>
                    <form onSubmit={onSubmit} className="container thinkeyEdit">
                        <input 
                            onChange={onChange} 
                            value={newThinkey} 
                            required
                            placeholder="Edit your thinkey"
                            autoFocus
                            className="formInput"
                        />
                        <input type="submit" value="Update Thinkey" className="formBtn"/>
                    </form>
                    <button onClick={toggleEditing} className="formBtn cancelBtn">Cancel</button>
                </>
            ) : (
                <div>
                    <h2>{thinkeyObj.displayName}</h2>
                    {thinkeyObj.attachmentUrl && (
                        <img src={thinkeyObj.attachmentUrl}/>
                    )}
                    <h4>{thinkeyObj.text}</h4>
                    {isOwner && (
                        <div className="thinkey__actions">
                            <span onClick={onDeleteClick}>
                                <FontAwesomeIcon icon={faTrash}/>
                            </span>
                            <span onClick={toggleEditing}>
                                <FontAwesomeIcon icon={faPencilAlt}/>
                            </span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Thinkey;