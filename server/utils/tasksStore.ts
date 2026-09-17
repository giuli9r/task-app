export interface Task {
  id: number;
  title: string;
  done: boolean;
  createdAt: string;
}

// In-memory array acting as our mock database
// Nitro auto-imports anything in server/utils across all server handlers!
export const tasksStore: Task[] = [
  {
    id: 1,
    title: "Hello World! Init all.",
    done: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Learn Vue!",
    done: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: "Learn Nuxt!",
    done: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    title: "Build a task app!",
    done: false,
    createdAt: new Date().toISOString(),
  },
];
