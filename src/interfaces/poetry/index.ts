import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PoetryInterface {
  id?: string;
  title: string;
  content: string;
  creation_date: any;
  last_update_date?: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface PoetryGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  user_id?: string;
}
