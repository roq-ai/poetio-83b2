import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ShowInterface {
  id?: string;
  title: string;
  description?: string;
  date: any;
  location: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ShowGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  location?: string;
  user_id?: string;
}
