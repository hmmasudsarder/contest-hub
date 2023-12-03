import { formatDistance } from "date-fns";
import{ DateRange }from "react-date-range";
// 
const Calender = ({ value, handleSelect, course }) => {
    const totalDays = formatDistance(new Date(course.to), new Date(course.from))
    return (
      <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white">
        <div className="flex item-center gap-1 p-4">
            <h1 className="text-2xl font-bold">after contest <span className="text-red-300"> {totalDays}</span> close</h1>
        </div>
        <div className="flex justify-center">
        <DateRange
        rangeColors={['#F43F5E']}
        ranges={[value]}
        // onChange={handleSelect}
        // date={value.startDate}
        direction='vertical'
        showDateDisplay={false}
        // minDate={value.startDate}
        // maxDate={value.endDate}
      />
        </div>
      </div>
    )
  };

export default Calender;