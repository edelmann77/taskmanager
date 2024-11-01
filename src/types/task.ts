import { Status } from './status';

export type Task = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  status: Status;
};
