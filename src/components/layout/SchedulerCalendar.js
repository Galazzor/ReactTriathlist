import { Scheduler, View } from "devextreme-react/scheduler";
import { useCallback, useState } from "react";

import { data } from '../data.js';

function SchedulerCalendar() {

    const [currentDate, setCurrentDate] = useState(new Date());
    const handlePropertyChange = useCallback((e) => {
      if (e.name === "currentDate") {
        setCurrentDate(e.value);
      }
    }, []);

  return (
    <Scheduler
      id="scheduler"
      defaultCurrentView="week"
      dataSource={data}
      currentDate={currentDate}
      onOptionChanged={handlePropertyChange}
      shadeUntilCurrentTime={true}
      height={850}
      adaptivityEnabled={true}
    >
      <View type="day" startDayHour={0} endDayHour={24} />
      <View type="week" startDayHour={0} endDayHour={24} />
      <View type="month" />
    </Scheduler>
  );
}

export default SchedulerCalendar;
