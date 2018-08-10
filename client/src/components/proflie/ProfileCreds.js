import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    const expitems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.company}</h4>
        <p>
          <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{" "}
          {exp.current === false ? (
            " Now"
          ) : (
            <Moment format="DD/MM/YYYY">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position:</strong> {exp.title}
        </p>
        <p>
          {isEmpty(exp.location) ? null : (
            <span>
              <strong>Location:</strong> {exp.location}
            </span>
          )}
        </p>
        <p>
          {isEmpty(exp.desc) ? null : (
            <span>
              <strong>Description:</strong>
              {exp.desc}
            </span>
          )}
        </p>
      </li>
    ));

    const eduitems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h4>{edu.school}</h4>
        <p>
          <Moment format="DD/MM/YYYY">{edu.from}</Moment> -{" "}
          {edu.current === false ? (
            " Now"
          ) : (
            <Moment format="DD/MM/YYYY">{edu.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree:</strong> {edu.degree}
        </p>
        <p>
          <strong>Field of Study:</strong> {edu.fieldofstudy}
        </p>

        <p>
          {isEmpty(edu.desc) ? null : (
            <span>
              <strong>Description:</strong>
              {edu.desc}
            </span>
          )}
        </p>
      </li>
    ));
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experience</h3>
          {expitems.length > 0 ? (
            <ul className="list-group">{expitems}</ul>
          ) : (
            <p className="text-center">No Experience Listed</p>
          )}
        </div>
        <div className="col-md-6">
          <h3 className="text-center text-info">Education</h3>
          {expitems.length > 0 ? (
            <ul className="list-group">{eduitems}</ul>
          ) : (
            <p className="text-center">No Education Listed</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
