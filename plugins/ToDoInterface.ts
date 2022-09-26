export default interface ToDoElement {
    task: string;
    status: 'complete' | 'ongoing' | 'done';
    date: String;
  };