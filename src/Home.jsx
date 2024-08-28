import React from "react";
import FirstComp from "./components/FirstComp";
import SecondComp from "./components/SecondComp";
import ThirdComp from "./components/ThirdComp";
import FourthComp from "./components/FourthComp";
import ToggleButton from "./components/ToggleButton";

const Home = () => {
    const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML"];


    return (
        <>
            <h1>Ahmed Hatem</h1>
            <h3>Lab 2 Tasks</h3>
            <hr />
            <h1>Task 1:</h1>
            <FirstComp />
            <hr />
            <h1>Task 2:</h1>
            <SecondComp />
            <hr />
            <h1>Task 3:</h1>
            <ThirdComp
                name="Ahmed Hatem"
                age={21}
                profession="Full stack developer"
                address="Menofia"
                skills={skills}
            >
                <p>Example of paragraph child</p>
            </ThirdComp>
            <hr />
            <h1>Task 4:</h1>
            <FourthComp
                course1="Mathematics"
                course2="Physics"
                course3="Computer Science"
                course4="Chemistry"
            >
                <p>Example of paragraph child</p>
            </FourthComp>
            <hr />
            <h1>Task 5:</h1>
            <ToggleButton />
        </>
    );
};

export default Home;
