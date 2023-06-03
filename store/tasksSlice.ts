import { createSlice } from '@reduxjs/toolkit';

export type Task = {
  id: string;
  name: string;
};

export type TasksState = {
  tasks: Task[];
  isModalOpen: boolean;
};

const initialState: TasksState = {
  tasks: [],
  isModalOpen: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    },
    deleteTask: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    },
    openModal: (state) => {
      return {
        ...state,
        isModalOpen: true,
      };
    },
    closeModal: (state) => {
      return {
        ...state,
        isModalOpen: false,
      };
    },
  },
});

export default tasksSlice.reducer;
export const { addTask, deleteTask, openModal, closeModal } =
  tasksSlice.actions;
