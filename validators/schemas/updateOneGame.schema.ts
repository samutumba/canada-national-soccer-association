import * as Yup from 'yup';
import { GameUpdateInputObjectSchema, GameWhereUniqueInputObjectSchema } from './internals'

export const GameUpdateOneSchema = Yup.object({ data: GameUpdateInputObjectSchema, where: GameWhereUniqueInputObjectSchema  }).required()