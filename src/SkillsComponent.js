// SkillsComponent.js
import React from 'react';

const SkillCard = ({ title, description, progress, barWidth }) => (
  <div className="col-12 col-lg-6">
    <div className="card">
      <div className="card-body p-4 p-xxl-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 skill-title">
            <h3 className="fw-bold mb-2">{title}</h3>
            <p className="text-secondary fst-italic mb-4 mb-md-0">{description}</p>
          </div>
          <div className="col-12 col-md-5 skill-progress">
            <div className="progress">
              <div className={`progress-bar progress-bar-striped progress-bar-animated progress-bar-width-${barWidth}`} role="progressbar" aria-label={title} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SkillsComponent = ({ skills }) => {
  return (
    <section className="bsb-skill-2 py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8">
            <button type="button" className="btn btn-lg btn-primary mb-3 mb-md-4 mb-xl-5">Skills</button>
            <h2 className="display-5 mb-4">Data realm.</h2>
          </div>
        </div>
      </div>

      <div className="container overflow-hidden">
        <div className="row gy-3 gy-lg-4">
          {/* Skill Cards */}
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
