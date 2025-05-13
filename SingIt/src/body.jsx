import './body.css';
import { useState } from 'react';
function Body()
{
    const [lyrics, setLyrics] = useState('');
    const handlesubmit=() => 
    {
        console.log("submitted Lyrics : ",lyrics);
    };
    return (
        <div className="body">
            <input type="text" className="input" placeholder="Enter Lyrics......" onChange={(e)=>setLyrics(e.target.value)}/>
            <button className="button" onClick={handlesubmit}>Submit</button>
        </div>
    );
}
export default Body;
