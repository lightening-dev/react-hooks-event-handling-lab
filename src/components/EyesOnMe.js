// Code EyesOnMe Component Here


function EyesOnMe() { 
    const handleFocus = () => console.log('Good!');
    const handleBlur = () => console.log('Hey! Eyes on me!'); 

    return (<button onBlur={handleBlur} onFocus={handleFocus} >Eyes on me</button>)
}

export default EyesOnMe;