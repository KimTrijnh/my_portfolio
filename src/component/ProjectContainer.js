import React, { Component } from 'react'
import ProjectItem from './ProjectItem';
import "./sideButton.css";

export default class ProjectContainer extends Component {
    constructor(){
        super();
        this.state = {projects: null, isLoading: true}
    }

    async getData() {
        const token = '02cf288fbfaa8c9b64f01ac46ec609f521b1539f91a46621395b63cfb065504b'
        const url = `https://api.netlify.com/api/v1/sites?access_token=${token}`
        try {
            let response = await fetch(url)
            let json = await response.json()
            console.log(json)
            this.setState({projects : json, isLoading: false})
            }
            catch(err) {console.log(err)}           
    }

    async componentDidMount() {
        this.getData()
    }
  render() {
      const {isLoading, projects} = this.state
    return (
      <ul className="list-unstyled scrolling-box">
        { isLoading ? <li>Loading...</li> :
         projects.map( project =>
         <ProjectItem project={project} />
         )
        }
      </ul>
    )
  }
}
