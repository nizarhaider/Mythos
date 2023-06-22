import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    "position": "UTM",
    "company": "University of Technology Malaysia",
    "location": "Johor Bahru, MY",
    "date": "2019 - 2023",
    "description": "Python, Machine Learning, Data Science, SQL"
  },
  {
    "position": "Wycherly International School",
    "company": "Science",
    "location": "Colombo, SL",
    "date": "2016 - 2018",
    "description": "Cambridge A'Levels: 2A1B1C"
  },

];

const EducationSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Education
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <VerticalTimeline
        className="vertical-timeline--red"
        lineColor='red'
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
export default EducationSection;