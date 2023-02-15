import { useTranslation } from "react-i18next";
import WorkCard from "./WorkCard.component";

const Work = () => {

    const { t } = useTranslation();

    return (
        <div className="Work">
            <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">{t("work.title")}</h1>
            <div className="Flex">
                <div className="Works">
                    <WorkCard
                        title={t("work.labelEmmaus.title")}
                        date="2021-2022"
                        summary={t("work.labelEmmaus.summary")}
                        text={t("work.labelEmmaus.text")}
                        link="https://label-emmaus.co/"
                    />
                    <WorkCard
                        title={t("work.galactic.title")}
                        date="2022"
                        summary={t("work.galactic.summary")}
                        text={t("work.galactic.text")}
                        link="https://github.com/CantinDeBrunoy/run4urlife"
                        github={true}
                    />
                    <WorkCard
                        title={t("work.metaverse.title")}
                        date="2022"
                        summary={t("work.metaverse.summary")}
                        text={t("work.metaverse.text")}
                        link="https://github.com/PKM-corporation/worldtf"
                        github={true}
                    />
                    <WorkCard
                        title={t("work.sauvegarde.title")}
                        date="2023"
                        summary={t("work.sauvegarde.summary")}
                        text={t("work.sauvegarde.text")}
                        link="https://github.com/goodfoodtruck/sauvegarde"
                        github={true}
                    />
                    <WorkCard
                        title={t("work.retech.title")}
                        date="2022"
                        summary={t("work.retech.summary")}
                        text={t("work.retech.text")}
                        link="https://github.com/Ki2lian/re-tech"
                        github={true}
                    />
                    <WorkCard
                        title={t("work.mana.title")}
                        date="2023"
                        summary={t("work.mana.summary")}
                        text={t("work.mana.text")}
                        link="https://github.com/goodfoodtruck/mana"
                        github={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default Work;