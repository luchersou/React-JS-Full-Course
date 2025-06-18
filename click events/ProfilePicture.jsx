
function ProfilePicture(){

    const imageUrl = './src/assets/mountain-sunrise.png';

    const handleClick = (e) => e.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}
export default ProfilePicture