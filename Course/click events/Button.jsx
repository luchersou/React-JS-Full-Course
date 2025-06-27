function Button(){

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    // return(<button onClick={() => handleClick2("Lucas")}>Click me</button>)



    /*
    let count = 0

    const handleClick = () => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`);
        }
        else{
            console.log(`${name} stop clicking me!`);
        }

    };

    return(<button onClick={() => handleClick("Lucas")}>Click me</button>)
    */



    const handleClick = (e) => e.target.textContent = "OUCH!";

    return(<button onDoubleClick={(e) => handleClick(e)}>Click me</button>);
}
export default Button