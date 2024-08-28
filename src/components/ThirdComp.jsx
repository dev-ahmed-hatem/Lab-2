import React from "react";

function ThirdComp({ name, age, profession, address, skills, children }) {
    return (
        <div>
            <h2>Bio</h2>
            <p>
                <strong>Name:</strong> {name}
            </p>
            <p>
                <strong>Age:</strong> {age}
            </p>
            <p>
                <strong>Profession:</strong> {profession}
            </p>
            <p>
                <strong>Address:</strong> {address}
            </p>
            <h3>Skills:</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <div>{children}</div>
        </div>
    );
}

export default ThirdComp;
