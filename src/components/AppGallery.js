const AppGallery = (props) => {
    return(
        <div>
            <img src={props.image} alt={props.imagedesc} />
            <div className="logo-and-name">
                <img src={props.applogo} alt={props.title}/>
                <h4>{props.title}</h4>
            </div>
            <p>{props.description}</p>
        </div>
    )
}

export default PieceOfArt;