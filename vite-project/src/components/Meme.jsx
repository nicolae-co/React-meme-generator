import memeData from "../data"

function Meme() {

    

    function getMemeImage() {
        const memeArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
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
        </main>
    )
}

export default Meme
