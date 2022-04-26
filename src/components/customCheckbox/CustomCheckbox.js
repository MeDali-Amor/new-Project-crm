import { useState } from "react";
import "./customCheckbox.scss";
const CustomCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);
    // console.log(isChecked);
    return (
        <label className="checkbox-wrapper">
            <input
                className="checkbox-input"
                type="checkbox"
                onChange={(e) => setIsChecked(e.target.checked)}
            />
            <span className="checkbox-display"></span>
        </label>
    );
};

export default CustomCheckbox;
