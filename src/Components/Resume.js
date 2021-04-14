import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>
              {work.description}
              <br />
              {work.description2}
            </p>
          </div>
        );
      });
      var skills = this.props.data.skills1.map(function (skills) {
        // var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <em>{skills.name}</em>
          </li>
        );
      });
      var skills2 = this.props.data.skills2.map(function (skills2) {
        // var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills2.name}>
            <em>{skills2.name}</em>
          </li>
        );
      });
      var skills3 = this.props.data.skills3.map(function (skills3) {
        // var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills3.name}>
            <em>{skills3.name}</em>
          </li>
        );
      });
      var skills4 = this.props.data.skills4.map(function (skills4) {
        // var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills4.name}>
            <em>{skills4.name}</em>
          </li>
        );
      });
      var skills5 = this.props.data.skills5.map(function (skills5) {
        // var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills5.name}>
            <em>{skills5.name}</em>
          </li>
        );
      });
      var skills6 = this.props.data.skills6.map(function (skills6) {
        // var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills6.name}>
            <em>{skills6.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="twelve columns main-col">
              <div className="six columns header-col">
                <h5>Programming Language</h5>
              </div>
              <div className="six columns info" style={{marginTop: "0px"}}>
                <ul className="skills">{skills}</ul>
              </div>
            </div>
            <div className="twelve columns main-col">
              <div className="six columns header-col">
                <h5>Database</h5>
              </div>
              <div className="six columns info" style={{marginTop: "0px"}}>
                <ul className="skills">{skills2}</ul>
              </div>
            </div>
            <div className="twelve columns main-col">
              <div className="six columns header-col">
                <h5>Hard Skills</h5>
              </div>
              <div className="six columns info" style={{marginTop: "0px"}}>
                <ul className="skills">{skills3}</ul>
              </div>
            </div>
            <div className="twelve columns main-col">
              <div className="six columns header-col">
                <h5>Office Skills</h5>
              </div>
              <div className="six columns info" style={{marginTop: "0px"}}>
                <ul className="skills">{skills4}</ul>
              </div>
            </div>
            <div className="twelve columns main-col">
              <div className="six columns header-col">
                <h5>Foreign Languages</h5>
              </div>
              <div className="six columns info" style={{marginTop: "0px"}}>
                <ul className="skills">{skills5}</ul>
              </div>
            </div>
            <div className="twelve columns main-col" style={{float: "left"}}>
              <div className=" six columns header-col">
                <h5>Personal Skills</h5>
              </div>
              <div className="six columns info" style={{marginTop: "0px"}}>
                <ul className="skills">{skills6}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
