import trollFace from "../assets/troll-face.png"

function Header() {
    return (
        <header className="header">
            <img src={trollFace} className="header--img" alt="troll face" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--subtitle">React Course - Project 3</h4>
        </header>
    )
}

export default Header
