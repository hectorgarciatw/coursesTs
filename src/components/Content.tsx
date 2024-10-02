import React from "react";
import { CoursePart } from "../App";
import Part from "./Part";

interface ContentProps {
    courseParts: CoursePart[];
}

const Content = ({ courseParts }: ContentProps) => {
    return (
        <div>
            {courseParts.map((part) => (
                <Part key={part.name} coursePart={part} />
            ))}
        </div>
    );
};

export default Content;
