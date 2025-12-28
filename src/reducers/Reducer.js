export const initialTasks = [];

export default function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added':
            return [
            ...tasks,{
                id: tasks.length + 1,
                text: action.text,
                isChecked:false,
                isComplete:false,
                isActive:false
            }
        ]
        case 'active':
            return tasks.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, isActive: !todo.isActive };
                }
                return todo;
            });
        case 'changed':
            return tasks.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, isChecked: !todo.isChecked };
                }
                return todo;
            });
        case 'deleted':
            return tasks.filter((prev) => prev.id !== action.id);
        default:
            throw Error('Unknown action: ' + action.type);
    }
}