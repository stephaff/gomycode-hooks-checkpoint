import { useState } from 'react';
import './MovieRef.css';

const MovieRef = ({ addWindow, setAddWindow, addMovie }) => {

  const displayAddWindow = () => setAddWindow(!addWindow);
  const [movieTitle, setMovieTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  function currentTitle(e){
    setMovieTitle(e.target.value);
  }

  function addNewMovie(){
    addMovie({title : movieTitle, poster : selectedFile});
    setMovieTitle('');
  }

  function selectImage(e){
    let reader = new FileReader();
    let file = e.target.files[0];
    if(file){
      reader.readAsDataURL(file);
    }
    
    reader.addEventListener('load', ()=>{
      setSelectedFile(reader.result);
    })
  }
  
  return (
    <div className={addWindow? 'movie-ref' : 'movie-ref display-movie-ref'}>
      <div className="movieRef-left">
        <div className="movieRef-title">
          <h3>Titre</h3>
          <input type="text" onChange={ currentTitle } value={ movieTitle } />
        </div>
        <div className="movieRef-poster">
          <h3>Poster</h3>
          <div className="poster-choice">
            <input type="file" id="file-poster" accept='.png, .jpg, .jpeg' onChange={ selectImage } hidden />
            <label htmlFor="file-poster">Choisir un fichier</label>
          </div>
        </div>
        <div className="movieRef-url">
          <h3>URL</h3>
          <input type="text" />
        </div>
      </div>
      <div className="movieRef-right">
        <button className='movieRef-btn-add' onClick={ addNewMovie }>Add</button>
        <button className='btn-close' onClick={displayAddWindow}>X</button>
      </div>
    </div>
  )
}

export default MovieRef;