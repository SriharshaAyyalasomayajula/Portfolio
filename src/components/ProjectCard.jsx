import { FaYoutube } from "react-icons/fa";
import ReactPlayer from 'react-player';

export const ProjectCard = ({
  title,
  type,
  imgUrl,
  videoUrl,
  heading,
  techStack,
  gitHref,
  netlifyHref,
  imageClass,
}) => {
  return (
    <div className="proj-wrapper">
      <div className="proj-imgbx">
        <ReactPlayer url={videoUrl}
          playing
          loop
          muted
        />
        <div className="proj-txtx">
          <h4>{heading}</h4>
          <p>{title}</p>
          <span>{type}</span>
          <div className={imageClass}>
            <p>Tech Stack</p>
            {/* <img src={techStack} alt="project-teach-stack" /> */}
            {
              techStack.map((elem)=>{
                return <img src={elem} alt="project-teach-stack" />
              })
            }
          </div>
          <div className="proj-buttons">
            {/* <a href={gitHref} className="proj-button1" target="_blank">
              <span>
                <BsGithub />
              </span>
              {"  "}
              Github
            </a> */}
            <a href={netlifyHref} className="proj-button2" target="_blank">
              <span>
                <FaYoutube />
              </span>
              {"  "}
              Video Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
