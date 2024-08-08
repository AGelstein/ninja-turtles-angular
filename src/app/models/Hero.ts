import { Powerstats } from './Powerstats';

export interface Hero {
  id: number;
  name?: string;
  img?: string;
  powerstats?: Powerstats;
}
