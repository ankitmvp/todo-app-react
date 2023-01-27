const Button = ({name, onclick}) => {
    return (<>
        <button className="btn btn-success btn-sm float-right mb-5" onClick={onclick}>
            {name}
        </button>
    </>);
}

export default Button;