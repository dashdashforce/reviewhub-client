export type User = {
  id?: string;
  name?: string;
  login: string;
  image_url: string;
  langs: Language[];
  pull_requests?: PullRequest[];
  reviews?: Review[];
  feed?: Review[];
};

export type Language = {
  id?: string;
  color: string;
  name: string;
};

export type PullRequest = {
  id: string;
  name: string;
  code: string;
  user_id: string;
  status: string;
  langs: Language[];
  comments: Comment[];
};

export type Comment = {
  text: string;
  reviewer_id: string;
  status: string;
};

export enum REVIEW_STATUS {
  NEW = '0',
  APPROVING = '2',
  PROCCESSING = '1',
  PENDING = '3',
  DONE = '4',
}

export type Review = {
  id: string;
  title: string;
  description: string;
  langs: Language[];
  status?: REVIEW_STATUS;
};
