import * as Yup from 'yup';
import { GameWhereInputObjectSchema } from './internals'

export const GameDeleteManySchema = Yup.object({ GameWhereInputObjectSchema  }).required()