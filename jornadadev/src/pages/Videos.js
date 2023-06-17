import React, { useRef, useState } from 'react';
import './videos.css';
import VideoFooter from './components/footer/VideoFooter';
import VideoSidebar from './components/sidebar/VideoSidebar';

function Videos({likes, messages, shares, name, description, music, url}) {

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
            src={url}
            ref={videoRef}
            onClick={handlePlay}
            loop
            >
            </video>

            {/* SideBar */}
            <VideoSidebar
            likes={likes}
            messages={messages}
            shares={shares}
             />
            {/* VideoFooter */}
            <VideoFooter
            name={name}
            description={description}
            music={music}
            />
            
        </div>
    );
}

export default Videos;
