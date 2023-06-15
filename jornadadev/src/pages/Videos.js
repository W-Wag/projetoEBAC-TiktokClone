import React, { useRef, useState } from 'react';
import './videos.css';

function Videos() {

    const videoRef = useRef(null);

    const [playing, setPlaying] = useState(false);

    function handlePlay() {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }

    }

    return (
        <div className="videos">
            <video 
            className="video_player"
            src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
            ref={videoRef}
            onClick={handlePlay}
            loop
            >
            </video>
            
        </div>
    );
}

export default Videos;
