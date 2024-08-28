import React, { Component } from "react";

class FourthComp extends Component {
    render() {
        const { course1, course2, course3, course4 } = this.props;

        return (
            <div>
                <h2>Courses I Studied</h2>
                <p>
                    <strong>Course 1:</strong> {course1}
                </p>
                <p>
                    <strong>Course 2:</strong> {course2}
                </p>
                <p>
                    <strong>Course 3:</strong> {course3}
                </p>
                <p>
                    <strong>Course 4:</strong> {course4}
                </p>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default FourthComp;
