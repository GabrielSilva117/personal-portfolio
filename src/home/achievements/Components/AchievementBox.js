import React from 'react';

const AchievementBox = ({ achievement }) => {
    return (
        <div className="achievement-content-box">
            <div className="achievement-text-header">
                <h2> {achievement.title}</h2>
                <p>{achievement.company}</p>
            </div>
            <div className="achievement-text-body">
                <p >{achievement.description}</p>
            </div>
        </div>
    );
};

export default AchievementBox;
