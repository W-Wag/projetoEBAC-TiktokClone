import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import './videoFooter.css';

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter_Text">
        <h3>@John Doe</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
        <div className="videoFooter_Music">
          <MusicNoteIcon className="videoFooter_MusicIcon" />

          <div className="videoFooterMusic_Text">
            <p>Titulo da musica</p>    
          </div>
          
        </div>
      </div>
      <img
        className="videoFooter_Img"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
        alt="Imagem de um vinil girando" />
    </div>
  );
}

export default VideoFooter;
