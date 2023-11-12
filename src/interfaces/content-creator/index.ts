import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ContentCreatorInterface {
  id?: string;
  user_id: string;
  bio?: string;
  website?: string;
  social_media_handle?: string;
  specialty?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ContentCreatorGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  bio?: string;
  website?: string;
  social_media_handle?: string;
  specialty?: string;
}
