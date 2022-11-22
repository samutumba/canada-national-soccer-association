import * as Yup from 'yup';
import { GameEventWhereUniqueInputObjectSchema, GameEventCreateInputObjectSchema, GameEventUpdateInputObjectSchema } from './internals'

export const GameEventUpsertSchema = Yup.object({ where: GameEventWhereUniqueInputObjectSchema, data: GameEventCreateInputObjectSchema, update: GameEventUpdateInputObjectSchema  }).required()