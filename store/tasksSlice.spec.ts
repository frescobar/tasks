import tasksReducer, {
  addTask,
  deleteTask,
  openModal,
  closeModal,
} from './tasksSlice';

describe('tasksSlice', () => {
  describe('addTask', () => {
    it('should add a task to the tasks array', () => {
      const initialState = {
        tasks: [],
        isModalOpen: false,
      };

      const task = {
        id: '1',
        name: 'Task 1',
      };

      const nextState = tasksReducer(initialState, addTask(task));

      expect(nextState.tasks).toEqual([task]);
    });
  });

  describe('deleteTask', () => {
    it('should delete a task from the tasks array', () => {
      const initialState = {
        tasks: [
          { id: '1', name: 'Task 1' },
          { id: '2', name: 'Task 2' },
        ],
        isModalOpen: false,
      };

      const nextState = tasksReducer(initialState, deleteTask('1'));

      expect(nextState.tasks).toEqual([{ id: '2', name: 'Task 2' }]);
    });
  });

  describe('openModal', () => {
    it('should set isModalOpen to true', () => {
      const initialState = {
        tasks: [],
        isModalOpen: false,
      };

      const nextState = tasksReducer(initialState, openModal());

      expect(nextState.isModalOpen).toBe(true);
    });
  });

  describe('closeModal', () => {
    it('should set isModalOpen to false', () => {
      const initialState = {
        tasks: [],
        isModalOpen: true,
      };

      const nextState = tasksReducer(initialState, closeModal());

      expect(nextState.isModalOpen).toBe(false);
    });
  });
});
