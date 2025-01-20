import TaskCard from "@/components/global/Task/OverViewTaskCard";
import TaskContainer from "@/components/global/Task/TaskContainer";
import TaskModel from "@/components/global/Task/TaskModel";
import useGetTaskData from "@/query/useGetTaskData";
import { TodosByStatus } from "@/types/task.type";
import { useState } from "react";

import TaskFilter from "./TaskFilter";

const TaskInfo = () => {
  const { data } = useGetTaskData("overview");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleDialogChange = (open: boolean) => {
    setIsOpen(open);
  };
  return (
    <div className="mt-3">
      <div>
        <TaskFilter />
      </div>
      <div className="flex mt-2 justify-between gap-x-12">
        {data?.todo &&
          (Object.keys(data.todo) as Array<keyof TodosByStatus>).map(
            (status, index) => (
              <TaskContainer
                key={index}
                heading={status}
                className="w-2/6 rounded-3xl  "
              >
                {data?.todo[status].map((task) => {
                  const { title, description, dueDate, _id } = task;
                  return (
                    <TaskCard
                      key={_id}
                      title={title}
                      description={description}
                      date={dueDate}
                      onClick={() => setIsOpen(true)}
                    />
                  );
                })}
              </TaskContainer>
            )
          )}
      </div>
      {isOpen && (
        <TaskModel isOpen={isOpen} onOpenChange={handleDialogChange} />
      )}
    </div>
  );
};

export default TaskInfo;
