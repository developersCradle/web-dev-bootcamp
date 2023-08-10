import { useState } from "react";
import { v4 as uuid } from "uuid";

function EmojiClicker(){

    const [emojis, setEmojis] = useState([{ id : uuid(), emoji : "😊" }]);
    
    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, {id: uuid(), emoji : "😘"}]); //Copy of old array based new array
    }

    const deleteEmoji = (id) => {// prevEmojis is holding state of the state 
        setEmojis((prevEmojis) => {
            return emojis.filter(e => e.id !== id);
        })
        // delete the emoji with the spesific id
    }

    const makeEverythingAHearth = () => {
        setEmojis((prevEmojis) => {
            return prevEmojis.map((e) => {
                return {...e, emoji : "♡"};
            });
        });
    };

    return (
        <div>
            {
                emojis.map(e => 
                <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{ fontSize : "4rem"}}>
                {e.emoji}
                </span>
                )}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeEverythingAHearth}>Make them all hearts</button>
        </div>
    )
}

export default EmojiClicker; 