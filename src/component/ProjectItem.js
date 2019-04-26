import React, { Component } from 'react'
import "./sideButton.css";

const ProjectItem = (props) =>
{return(
  <li className="project-item my-3 px-5 py-2">
  <a href={ props.project.url} className="text-light">
  <h5 className="title">{ props.project.name }</h5>
  </a>
  <a href={props.project.build_settings.repo_url}>To Github repo</a>  
  </li>
)}

export default ProjectItem