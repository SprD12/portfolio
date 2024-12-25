import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import { Line } from "rc-progress";
import './style.scss'

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skillset"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {
          skillsData.map((item, i) => (
            <div key={i} className="skills__content-wrapper__inner-content">
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div className="skills__content-wrapper__inner-content__progressbar-container">
                { item.data.map((skillItem, j) => (
                    <div className="progressbar-wrapper" key={j}>
                      <p>{skillItem.skillname}</p> 
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="3"
                        strokeColor="var(--blue-theme-main-color)"
                        trailWidth="3"
                        strokeLinecap="square"
                      />
                    </div>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills;
