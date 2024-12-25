import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaTools, FaLaptopCode} from 'react-icons/fa'; 
import { GiMaterialsScience } from 'react-icons/gi'; 
import { SiDatabricks } from 'react-icons/si'; 
import PageHeaderContent from "../../components/pageHeaderContent";
import './style.scss'

const personalData=[
    { label:"Name", value:"Spriha Dubey"},
    {label:"Country", value:"India"},
    {label:"Email", value:"sprihadubey2004@gmail.com"},
    {label:"Phone Number", value:"+91 8300257480"},
    {label:"Github", value:"SprD12"}
]

const jobSummary = `
A B.Tech student at IIT Kharagpur, specializing in Metallurgical and Materials Engineering with a strong foundation in materials science, including thermodynamics, phase transformations, deformation behavior, and corrosion engineering. Academic background complemented by advanced mathematical knowledge in calculus, linear algebra, and numerical analysis.

Proficient in C, C++, Python, and web technologies like HTML, CSS, JavaScript, and React.js, with hands-on experience in data science, machine learning, deep learning, and computer vision. Skilled with tools like NumPy, Pandas, PyTorch, and creative platforms such as Figma, Adobe Illustrator, and Photoshop.

Passionate about solving problems, exploring data-driven solutions, developing innovative web applications, and designing strategies in business analytics. Enjoys graphic design, reading, and painting, constantly seeking new opportunities to learn and grow.
`;

const About=()=>{
    return(
      <section id="about" className="about">
        <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40}/>}
        />
        <div className="about__content">
            <div className="about__content__personalWrapper"> 
         <p>{jobSummary}</p>
         <h3 className="personalinfoHead">Personal Information</h3>
         <ul>
           {
            personalData.map((item, i)=>(
                <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                </li>
            ))
           } 
         </ul>
         </div>
         <div className="about__content__servicesWrapper">
            <div className="about__content__servicesWrapper__innerContent">
            <div>
                <FaTools size={50} color="var(--blue-theme-main-color)"/>
            </div>
            <div>
               <FaLaptopCode size={50} color="var(--blue-theme-main-color)"/>
            </div>
            <div>
            <GiMaterialsScience size={50} color="var(--blue-theme-main-color)"/>
            </div>
            <div>
            <SiDatabricks size={50} color="var(--blue-theme-main-color)"/>
            </div>
            </div>
            
         </div>
        </div>
      </section>
    )
}
export default About;