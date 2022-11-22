import * as Yup from 'yup';
import { GameWhereUniqueInputObjectSchema } from './internals'

export const GameFindUniqueSchema = Yup.object({ where: GameWhereUniqueInputObjectSchema }).required()