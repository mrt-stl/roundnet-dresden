const ExampleColContent = (props) => {
    return (
        <div className="justify-content-center align-items-center" 
            style={{ backgroundColor: "var(--secondary)", height: "100%", width: "100%", color: "var(--white)" }}>
            {props.content}
        </div>
       
    )
}

export default ExampleColContent