import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import {data} from './utils'
import 'react-vertical-timeline-component/style.min.css'
import './style.scss'
import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const Resume=()=>{
    return(
        <section id="resume" className="resume">
        <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40}/>}
        />
        <div className="timeline">
          <div className="timeline__experience">
            <h3 className="timeline__experience__header-text">Experience</h3>
            <VerticalTimeline
            layout={'1-column'}
            lineColor="var(--blue-theme-main-color)"
            >
              {
                data.experience.map((item, i)=>(
                  <VerticalTimelineElement
                  key={i}
                  className="timeline__experience__vertical-timeline-content"
                  contentStyle={{
                    background: 'none', 
                    color: 'var(--blue-theme-sub-text-color)',
                    border: '1.5px solid var(--blue-theme-main-color)'
                  }}
                  data="2022-present"
                  icon={<MdWork/>}
                  iconStyle={{
                    background: '#181818',
                    color: 'var(--blue-theme-main-color)'
                  }}
                  >
                    <div className="vertical-timeline-element-title-wrapper">
                     <h3 className="vertical-timeline-element-title">
                      {item.title}
                     </h3>
                     <h4 className="vertical-timeline-element-subtitle">
                      {item.subtitle}
                     </h4>
                    
                    </div>
                    <p>
                      {item.description}
                     </p>

                  </VerticalTimelineElement>
                ))
              }

            </VerticalTimeline>

          </div>
          <div className="timeline__education">
            <h3 className="timeline__education__header-text">
              Education
            </h3>
            <VerticalTimeline
            layout={'1-column'}
            lineColor="var(--blue-theme-main-color)"
            >
              {
                data.education.map((item, i)=>(
                  <VerticalTimelineElement
                  key={i}
                  className="timeline__education__vertical-timeline-content"
                  contentStyle={{
                    background: 'none', 
                    color: 'var(--blue-theme-sub-text-color)',
                    border: '1.5px solid var(--blue-theme-main-color)'
                  }}
                  data="2022-present"
                  icon={<FaGraduationCap/>}
                  iconStyle={{
                    background: '#181818',
                    color: 'var(--blue-theme-main-color)'
                  }}
                  >
                    <div className="vertical-timeline-element-title-wrapper">
                     <h3 className="vertical-timeline-element-title">
                      {item.title}
                     </h3>
                     <h4 className="vertical-timeline-element-subtitle">
                      {item.subtitle}
                     </h4>
                     
                    </div>
                    <p>
                      {item.description}
                     </p>

                  </VerticalTimelineElement>
                ))
              }

            </VerticalTimeline>
          </div>
        </div>
      </section>
    )
}
export default Resume;