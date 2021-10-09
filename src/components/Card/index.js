function Card(props) {

    return (
        <div className="card" key={props.character.id} onClick={() => props.openModal(props.character)}>
            <img src={props.character.image} alt="Avatar" style={{ width: "100%" }} />
            <div className="container">
                <h4><b>{props.character.name}</b></h4>
            </div>
        </div>
    )

}

export default Card;