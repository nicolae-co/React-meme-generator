import { useState } from "react"
import memeData from "../data"

function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    const [allMemeImages, setAllMemeImages] = useState(memeData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevState => ({            
                ...prevState,
                randomImage: url            
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    className="form--input"
                    type="text"
                    placeholder="Top text"
                />
                <input
                    className="form--input"
                    type="text"
                    placeholder="Bottom text"
                />
                <button
                    onClick={getMemeImage}
                    className="form--button"
                    type="button"
                >
                    Get a new meme image  🖼
                </button>
            </div>
            <img className="form-img" src={meme.randomImage} alt="img" />
        </main>
    )
}

export default Meme
