import './body.css';
import { useState } from 'react';
import Sentiment from 'sentiment';
function Body()
{
    const [lyrics, setLyrics] = useState('');
    const [mood, setMood] = useState(null);
    const handlesubmit=() => 
    {
        const sentiment = new Sentiment();
        const result = sentiment.analyze(lyrics);
        console.log("submitted Lyrics : ",lyrics);
        console.log("Sentiment Result : ",result.score);
        setMood(result.score > 0 ? "Positive" : result.score < 0 ? "Negative" : "Neutral");
    };
    return (
        <div className="body">
            <input type="text" className="input" placeholder="Enter Lyrics......" onChange={(e)=>setLyrics(e.target.value)}/>
            <button className="button" onClick={handlesubmit}>Submit</button>
            {mood && <p>Detected Mood: {mood}</p>}
        </div>
    );
}
export default Body;
