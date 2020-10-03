import React from "react";
import Chip from '@material-ui/core/Chip';
import { skills } from "../../editable-stuff/configurations.json";

const Skills = () => {
    return (
        <div id="skills" className=" jumbotron-fluid bg-transparent m-0">
            {skills.length && (
                <div className="container container-fluid">
                    <h1 className="display-4 pt-3 pt-3 pb-3">{'Skills'}</h1>
                    <div className="row">
                        {skills.map((skill, i) => (
                            <Chip className="mb-3 mr-3" key={i} label={skill} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Skills;
