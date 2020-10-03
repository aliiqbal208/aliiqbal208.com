import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
// import GitHubCalendar from 'react-github-calendar';
import { githubHeading, gitHubLink, gitHubQuerry, gitHubUsername, projectsLength } from "../../editable-stuff/configurations.json";
import ProjectCard from "./ProjectCard";

const GithubCalendarPage = () => {
    const [projectsArray, setProjectsArray] = useState([]);
    const handleRequest = useCallback((e) => {
        axios
            .get(gitHubLink + gitHubUsername + gitHubQuerry)
            .then((response) => {
                return setProjectsArray(response.data.slice(0, projectsLength));
            })
            .catch((error) => {
                return console.error(error.message);
            })
            .finally(() => {
            });
    }, []);

    useEffect(() => {
        handleRequest();
    }, [handleRequest]);

    return (
        <div id="github-graph" className="jumbotron-fluid bg-transparent m-0">
            <div className="container container-fluid ">
                <h1 className="display-4 pt-3 pb-3">{githubHeading}</h1>
                <div className="row">
                    {projectsArray.map((project) => (
                        <ProjectCard key={project.id} id={project.id} value={project} />
                    ))}
                </div>
                {/* <GitHubCalendar blockSize={10} fontSize={16} blockMargin={4} username={gitHubUsername} /> */}
            </div>
        </div>
    );
};

export default GithubCalendarPage;
