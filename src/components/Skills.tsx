import './Skills.component.scss';

type ISkill = {
  name: string,
  level: string,
  class: string
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
        <i className={skill.class} style={{ fontSize: '220%' }}>
        </i>
        <p className="text-center" style={{ fontSize: '75%' }}>
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