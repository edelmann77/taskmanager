import { Status } from './status';

export type Task = {
  id: string;
  title: string;
  createdAt: Date;
  status: Status;
};
