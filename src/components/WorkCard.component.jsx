const WorkCard = (props) => {

    return (
        <div className="Card" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="Label">
                <h3 className="Title">{props.title}</h3>
                <p className="Summary">{props.summary}</p>
                <p className="Date">{props.date}</p>
                <a className="Link" href={props.link} target="_blank" rel="noreferrer">
                    <img
                        alt={props.title}
                        src={props.github ? "/img/icons/github.icon.png" : "/img/icons/link.icon.png"}
                    />
                </a>
            </div>
            <p className="Text">{props.text}</p>
        </div>
    )
}

export default WorkCard;