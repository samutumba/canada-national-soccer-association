import * as Yup from 'yup';
import { GameWhereUniqueInputObjectSchema, GameCreateInputObjectSchema, GameUpdateInputObjectSchema } from './internals'

export const GameUpsertSchema = Yup.object({ where: GameWhereUniqueInputObjectSchema, data: GameCreateInputObjectSchema, update: GameUpdateInputObjectSchema  }).required()