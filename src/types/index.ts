export type TypeList = {
  id: number;
  title: string;
  completed: boolean;
}[];

export type TypeFilter = {
  todo: boolean;
  completed: boolean;
};

export type TypeTask = {
  id: number;
  title: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
};

export type FilterKey = 'all' | 'todo' | 'completed';
