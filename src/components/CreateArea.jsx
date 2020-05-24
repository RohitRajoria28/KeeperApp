import React, { useState } from "react";
import PlusOneIcon from '@material-ui/icons/PlusOne';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {



const [isExpanded,setexpanded]=useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

function expand(){
  setexpanded(true);
}

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">

    {isExpanded? 
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> :null}


        <textarea


        onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded? 3 : 1}
        />

        < Zoom  in={ isExpanded}>
          < Fab onClick={submitNote}>
          
          < PlusOneIcon />
          </ Fab>
          < / Zoom >
      </form>
    </div>
  );
}

export default CreateArea;
