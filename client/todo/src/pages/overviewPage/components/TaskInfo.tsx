import TaskCard from "@/components/global/Task/OverViewTaskCard";
import TaskContainer from "@/components/global/Task/TaskContainer";
import useGetTaskData from "@/query/useGetTaskData";
import { TodosByStatus } from "@/types/task.type";

import { useTaskModel } from "@/zustand/useTaskModel";
import TaskFilter from "./TaskFilter";

const TaskInfo = () => {
  const { data } = useGetTaskData("overview");
  const { onEditOpenTaskModel } = useTaskModel();
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
                className="w-2/6 rounded-3xl"
                count={data.todo[status].length}
              >
                {data?.todo[status].map((task) => {
                  const { title, description, dueDate, _id } = task;
                  return (
                    <TaskCard
                      key={_id}
                      title={title}
                      description={description}
                      date={dueDate}
                      onClick={() => onEditOpenTaskModel(task)}
                    />
                  );
                })}
              </TaskContainer>
            )
          )}
      </div>
    </div>
  );
};

export default TaskInfo;
