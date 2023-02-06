import { useTranslation } from "react-i18next";
import i18n from "../translations/i18n";

const Translate = () => {
    
    const { t } = useTranslation();
    const changeLanguage = () => {
        if (i18n.language === "fr") {
            i18n.changeLanguage("en");
        } else {
            i18n.changeLanguage("fr");
        }
    };

    return (
        <div
            className="Translate"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="true"
            onClick={() => changeLanguage()}
        >
            <h4 className="Title">{t('home.language')}</h4>
            <img alt="Translate" className="Icon" src="img/icons/translation.icon.png" />
        </div>
    )
}

export default Translate;