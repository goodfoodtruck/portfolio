import { useState } from "react";
import Translate from "./Translate.component";
import { useTranslation } from "react-i18next";

const Home = () => {

    const { t } = useTranslation();
    const [display, setDisplay] = useState(0);
    const [copied, setCopied] = useState("");
    
    const copyToClipboard = async (data) => {
        try {
            await navigator.clipboard.writeText(data);
            setCopied("copied");
            setTimeout(() => {
                setCopied("");
            }, 1000)
        } catch (e) {
            console.error(e);
        };
    };

    const showBox = e => {
        e.preventDefault();
        setDisplay(1);
    };

    const hideBox = e => {
        e.preventDefault();
        setDisplay(0);
    };


    return (
        <div className="Home">
            <Translate />
            <div className="Container" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <span className="Icon Wave">👋</span>
                <p>
                    {t("home.introduction.text1")} <span style={{fontFamily: "Prompt"}}>Clément</span>, {t("home.introduction.text2")}
                </p>
                <div className="Contacts">
                    <a href="https://github.com/goodfoodtruck" target="_blank" rel="noreferrer">
                        <img
                            alt="github"
                            src="img/icons/github.icon.png"
                        />
                    </a>
                    <div>
                        <img
                            alt="email"
                            src="img/icons/email.icon.png"
                            onClick={() => copyToClipboard("martiniclement@protonmail.com")}
                            onMouseEnter={e => showBox(e)}
                            onMouseLeave={e => hideBox(e)}
                        />
                        <div className={`Box ${copied}`} style={{opacity: display}}>
                            <span>{copied ? t("home.introduction.copy") : "martiniclement@protonmail.com"}</span>
                            <div className={`arrow ${copied}`}></div>
                        </div>
                    </div>
                    <a href="https://www.linkedin.com/in/cl%C3%A9ment-martini-23235021a/" target="_blank" rel="noreferrer">
                        <img
                            alt="linkedin"
                            src="img/icons/linkedin.icon.png"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;