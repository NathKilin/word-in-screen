const FormComp = (props) => {
    console.log(props);


    const updateChoice = (e) => {      
        props.setUserChoice(e.target.innerText)
        props.setDidUserSubmited(true)
    }

    return (
        <div>
            <span onClick={updateChoice}>1</span>
            <span onClick={updateChoice}>2</span>
            <span onClick={updateChoice}>3</span>
            <span onClick={updateChoice}>4</span>
            <span onClick={updateChoice}>5</span>
        </div>
    )
};

export default FormComp;