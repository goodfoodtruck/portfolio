import { useTranslation } from "react-i18next";
import AboutContainer from "./AboutContainer.component";

const About = () => {

    const { t } = useTranslation();

    return (
        <div className="About" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
            <h1>{t("about.title")}</h1>
            <div className="Abouts">
                <AboutContainer
                    icon="🖥️"
                    title={t("about.passionate.title")}
                    summary={t("about.passionate.summary")}
                    text={t("about.passionate.text")}
                />
                <AboutContainer
                    icon="🛠️"
                    title={t("about.selfSufficient.title")}
                    summary={t("about.selfSufficient.summary")}
                    text={t("about.selfSufficient.text")}
                />
                <AboutContainer
                    icon="📚"
                    title={t("about.scholarship.title")}
                    summary={t("about.scholarship.summary")}
                    text={t("about.scholarship.text")}
                />
                <AboutContainer
                    icon="🌐"
                    title={t("about.blockchain.title")}
                    summary={t("about.blockchain.summary")}
                    text={t("about.blockchain.text")}
                />
            </div>
        </div>
    );
}

export default About;