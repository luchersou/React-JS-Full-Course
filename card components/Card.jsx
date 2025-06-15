import profilePic from './assets/mountain-sunrise.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Lucas Herzinger</h2>
            <p className="card-text">I'm studying React</p>
        </div>
    )
}