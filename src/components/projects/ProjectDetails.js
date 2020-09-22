import React from 'react'

const ProjectDetails = (props) => {
    console.log(props)
    let id = props.match.params.id;
    console.log(id)
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title - {id}</span>
                    <p>lorem</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by The Alien</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>

    )
}

export default ProjectDetails