import dotenv from 'dotenv-safe';
import { func } from '@src/helpers/sample';
import { DEFAULT } from '@src/helpers/constants';

dotenv.config();

console.log('Default', DEFAULT);

console.log(func(5, 5));
