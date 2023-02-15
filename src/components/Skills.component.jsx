import { useTranslation } from "react-i18next";

const Skills = () => {

    const { t } = useTranslation();

    return (
        <div className="Skills">
            <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">{t("skills.title")}</h1>
            <div className="SkillsContainer">
                <div className="Skill" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                    <img className="Logo" alt="JavaScript" src="img/icons/frameworks/javascript.icon.png" />
                    <span className="Label">JavaScript</span>
                </div>
                <div className="Skill" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                    <img className="Logo" alt="React" src="img/icons/frameworks/react.icon.png" />
                    <span className="Label">React</span>
                </div>
                <div className="Skill" data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
                    <img className="Logo" alt="Vue" src="img/icons/frameworks/vue.icon.png" />
                    <span className="Label">Vue</span>
                </div>
                <div className="Skill" data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
                    <img className="Logo" alt="TyoeScript" src="img/icons/frameworks/typescript.icon.png" />
                    <span className="Label">TypeScript</span>
                </div>
                <div className="Skill" data-aos="fade-up" data-aos-delay="500" data-aos-once="true">
                    <img className="Logo" alt="Node" src="img/icons/frameworks/node.icon.png" />
                    <span className="Label">Node</span>
                </div>
                <div className="Skill" data-aos="fade-up" data-aos-delay="600" data-aos-once="true">
                    <img className="Logo" alt="Python" src="img/icons/frameworks/python.icon.png" />
                    <span className="Label">Python</span>
                </div>
                <div className="Skill" data-aos="fade-up" data-aos-delay="700" data-aos-once="true">
                    <img className="Logo" alt="Django" src="img/icons/frameworks/django.icon.png" />
                    <span className="Label">Django</span>
                </div>
                <div className="Skill" data-aos="fade-up" data-aos-delay="800" data-aos-once="true">
                    <img className="Logo" alt="MongoDB" src="img/icons/frameworks/mongodb.icon.png" />
                    <span className="Label">MongoDB</span>
                </div>
                <div className="Skill" data-aos="fade-up" data-aos-delay="900" data-aos-once="true">
                    <img className="Logo" alt="Docker" src="img/icons/frameworks/docker.icon.png" />
                    <span className="Label">Docker</span>
                </div>
                <div className="Skill" data-aos="fade-up" data-aos-delay="1000" data-aos-once="true">
                    <img className="Logo" alt="Git" src="img/icons/frameworks/git.icon.png" />
                    <span className="Label">Git</span>
                </div>
                <div className="Skill" data-aos="fade-up" data-aos-delay="1100" data-aos-once="true">
                    <img className="Logo" alt="Postman" src="img/icons/frameworks/postman.icon.png" />
                    <span className="Label">Postman</span>
                </div>
                <div className="Skill" data-aos="fade-up" data-aos-delay="1200" data-aos-once="true">
                    <img className="Logo" alt="Swift" src="img/icons/frameworks/swift.icon.png" />
                    <span className="Label">Swift</span>
                </div>
                <div className="Skill" data-aos="fade-up" data-aos-delay="1300" data-aos-once="true">
                    <img className="Logo" alt="Symfony" src="img/icons/frameworks/symfony.icon.png" />
                    <span className="Label">Symfony</span>
                </div>
                <div className="Skill" data-aos="fade-up" data-aos-delay="1400" data-aos-once="true">
                    <img className="Logo" alt="Solidity" src="img/icons/frameworks/solidity.icon.png" />
                    <span className="Label">Solidity</span>
                </div>
            </div>
        </div>
    )
}

export default Skills;