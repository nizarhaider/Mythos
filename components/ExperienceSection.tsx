import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import 'styles/style.css';


const experiences = [
  {
    "position": "Data Science Intern",
    "company": "Mindvalley",
    "location": "Kuala Lampur, MY",
    "date": "2021-2022",
    "description": "Worked on modifying recommendation engine using tf recommender by adding extra features that was stored on BigQuery to improve performance of model and updated Airflow tasks"
  },
  {
    "position": "Technical Assistant Instructor",
    "company": "Code For Asia",
    "location": "Singapore",
    "date": "2020-2021",
    "description": "Researched, developed and tutored data science material (data scraping, wrangling, visualization) to over 240 students"
  },
  {
    "position": "AI intern",
    "company": "Doctor On Call",
    "location": "Kuala Lampur, MY",
    "date": "2020-2021",
    "description": "Developed a chatbot using RASA to help patients with their medical needs and to help doctors with their appointments"
  },
  {
    "position": "Ai Intern",
    "company": "Imagine AI",
    "location": "Johor Bahru, MY",
    "date": "2020-2020",
    "description": "Developed defect detection models using YOLOv3 and YOLOv4 to detect defects in manufacturing lines"

  }
];

const ExperienceSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <VerticalTimeline
        lineColor='rgb(20 184 166)'
        >
          {experiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.position}
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgba(20, 184, 166,0)'}}
              date={exp.date}
              
              iconStyle={{ background: 'rgba(20, 184, 166,100)', color: '#fff' }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">{exp.position}</h3>
              <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
              <p>{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceSection;