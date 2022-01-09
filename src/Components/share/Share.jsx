import "./share.css"
import{AddPhotoAlternate, VideoFile, AddCircle, Close} from "@mui/icons-material"
import { useState } from "react"
import ReactCircleModal from 'react-circle-modal'




export default function Share() {

    const [shake, setShake] = useState(false);
    
    const animate = () => {
        
        // Button begins to shake
        setShake(true);
        
        // Buttons stops to shake after 1 second
        setTimeout(() => setShake(false), 1000);
        
    }

    return (
        <ReactCircleModal
        backgroundColor="#9fdff4"
        toogleComponent={onClick => (
         <AddCircle color="primary" sx={{fontSize: 60}} onClick={onClick} />
        )}
        // Optional fields and their default values 
        offsetX={0}
        offsetY={0}
      > 
        {(onClick) => (
          <div style={{ backgroundColor: '#ffff',borderRadius: 10 + 'px' }}>
            <Close onClick={onClick}/>
        <div className = "share"> 
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="#" />
                    <input  placeholder="what's in your mind?" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <form className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <AddPhotoAlternate htmlColor="tomato"className="shareIcon"/>
                            <span className="shareOptionText">Photo</span>
                        </div>
                        <div className="shareOption">
                            <VideoFile htmlColor="gold"className="shareIcon"/>
                            <span className="shareOptionText">Video</span>
                        </div>
                    </div>
                    <button onClick={animate} className = {shake ? `shake` : "shareButton"} type="submit">Share</button>
                </form>
            </div>
        </div>

          </div>
        )}
      </ReactCircleModal>


    )
    // code for post elements starts from line 39 to 60
}