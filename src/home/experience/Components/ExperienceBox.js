import React from 'react';

const ExperienceBox = ({ experience }) => {
    return (
        <div className="exp-content-box">
            <div className="exp-icon-row">
                <img src={experience.logo} alt="Company logo" className="company-logo" />
            </div>
            <div className="exp-text-row">
                <div className="exp-text-header">
                    <h2>{experience.role}</h2>
                    <p>{experience.type}</p>
                </div>
                <div className="exp-text-body">
                    <p>{experience.description.summary}</p>
                    <ul>
                        {experience.description.subtopics.map((subtopic, index) => (
                            <li key={index}>{subtopic}</li>
                        ))}
                    </ul>
                    <small>Tecnologias utilizadas: {experience.description.technologies}</small>
                    <br/>
                    <small>{experience.duration}</small>
                </div>
            </div>
        </div>
    );
};

export default ExperienceBox;
