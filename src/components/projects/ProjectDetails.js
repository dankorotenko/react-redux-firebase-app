import { useParams } from "react-router";

const ProjectDetails = () => {
    const { id } = useParams();
    return ( 
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">Project Title - {id}</div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur magnam, repellat quos officiis explicabo eius est earum distinctio ipsam cumque ut aliquid maxime laudantium iure!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Net Ninjs</div>
                    <div>2nd September, 2ams</div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectDetails;