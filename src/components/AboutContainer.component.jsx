import { useState } from "react"

const AboutContainer = (props) => {

    const [active, setActive] = useState("");

    const deploy = () => {
        active ? setActive("") : setActive("Active");
    }

    return (
        <div className={`Container ${active}`} onClick={() => deploy()}>
            <span className="Icon">{props.icon}</span>
            <div className="Label" data-aos="fade">
                <h3 className="Title">{props.title}</h3>
                <p>{props.summary}</p>
            </div>
            <p className="Text">{props.text}</p>
        </div>
    )
}

export default AboutContainer;