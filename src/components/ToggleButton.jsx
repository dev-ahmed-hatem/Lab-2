import React, { useState } from "react";

function ToggleButton() {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <button
            onClick={() => {
                handleToggle();
            }}
        >
            {isToggled ? "ON" : "OFF"}
        </button>
    );
}

export default ToggleButton;
