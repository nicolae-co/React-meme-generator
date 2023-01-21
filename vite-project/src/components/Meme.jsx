import { useState } from "react"
import memeData from "../data"

function Meme() {

    const [memeImage, setMemeImage] = useState("")
    

    function getMemeImage() {
        const memeArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        setMemeImage(memeArray[randomNumber].url)
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
            <img className="form-img" src={memeImage} alt="img" />
        </main>
    )
}

export default Meme
