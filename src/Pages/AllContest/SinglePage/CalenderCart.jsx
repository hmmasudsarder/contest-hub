import { useState } from "react";
import Calender from "./Calender";


const CalenderCart = ({course}) => {
    const [value, setValue] = useState({
        startDate: new Date(course?.from),
        endDate: new Date(course?.to),
        key: "selection"
    })
    return (
        <div>
            <Calender course={course} value={value}></Calender>
        </div>
    );
};

export default CalenderCart;