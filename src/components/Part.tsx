import React from "react";
import { CoursePart } from "../App";

interface PartProps {
    coursePart: CoursePart;
}

const Part: React.FC<PartProps> = ({ coursePart }) => {
    return (
        <div>
            <h3>
                {coursePart.name} {coursePart.exerciseCount}
            </h3>
            {coursePart.kind === "basic" && <p>{coursePart.description}</p>}
            {coursePart.kind === "group" && <p>Project exercises: {coursePart.groupProjectCount}</p>}
            {coursePart.kind === "background" && (
                <>
                    <p>{coursePart.description}</p>
                    <p>Submit to: {coursePart.backgroundMaterial}</p>
                </>
            )}
            {coursePart.kind === "special" && (
                <>
                    <p>{coursePart.description}</p>
                    <p>Required skills: {coursePart.requirements.join(", ")}</p>
                </>
            )}
        </div>
    );
};

export default Part;
