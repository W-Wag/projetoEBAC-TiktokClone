import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import './videoFooter.css';

function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_Text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter_Music">
          <MusicNoteIcon className="videoFooter_MusicIcon" />

          <div className="videoFooterMusic_Text">
            <p>{music}</p>    
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
