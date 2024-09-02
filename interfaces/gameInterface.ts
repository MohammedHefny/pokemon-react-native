import {ImageSourcePropType} from 'react-native';

export interface GameI {
  id: number;
  name: string;
  platform: string;
  genre: string;
  releaseYear: number;
  rating: number;
  imageUrl: any;
}
