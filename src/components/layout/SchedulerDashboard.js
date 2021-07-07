import { Scheduler, View, Editing } from "devextreme-react/scheduler";
import { useCallback, useState } from "react";

import { data } from "../data.js";

function SchedulerDashboard() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const handlePropertyChange = useCallback((e) => {
    if (e.name === "currentDate") {
      setCurrentDate(e.value);
    }
  }, []);

  return (
    <Scheduler
      id="scheduler"
      defaultCurrentView="month"
      dataSource={data}
      currentDate={currentDate}
      height={400}
      onOptionChanged={handlePropertyChange}
      adaptivityEnabled={true}
    >
      <View type="month" />
      <Editing
        allowAdding={false}
        allowDeleting={false}
        allowDragging={false}
        allowResizing={false}
        allowTimeZoneEditing={false}
        allowUpdating={false}
      />
    </Scheduler>
  );
}

export default SchedulerDashboard;
