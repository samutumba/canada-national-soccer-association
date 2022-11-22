import * as Yup from 'yup';
import { GameEventWhereInputObjectSchema, GameEventOrderByWithRelationInputObjectSchema, GameEventWhereUniqueInputObjectSchema } from './internals'

export const GameEventAggregateSchema = Yup.object({ where: GameEventWhereInputObjectSchema, orderBy: GameEventOrderByWithRelationInputObjectSchema, cursor: GameEventWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()