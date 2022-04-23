import './Skills.component.scss';
import { Icon } from '@iconify/react';

type ISkill = {
  name: string,
  level: string,
  iconName: string
}

type ISkillsProps = {
  skills: ISkill[]
}

type ISkillProps = {
  skill: ISkill
}

const Skill = ({ skill }: ISkillProps) => {
  return <li className="list-inline-item mx-3">
    <span>
      <div className="text-center skills-tile">
        <Icon icon={skill.iconName}
          style={{ fontSize: "250%", margin: "9% 5% 0 5%", color: "#0078D4" }}
        />
        <p className="text-center" style={{ fontSize: '50%', marginTop: 6 }}>
          {skill.name}
        </p>
      </div>
    </span>
  </li>
}

const Skills = ({ skills }: ISkillsProps) => {
  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title pb-5p">
            <span className="text-white">Skills</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">
            {skills.map(skill => <Skill skill={skill} key={skill.name} />)}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills;