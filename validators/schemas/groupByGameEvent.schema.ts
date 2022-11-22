import * as Yup from 'yup';
import { GameEventWhereInputObjectSchema, GameEventOrderByWithAggregationInputObjectSchema, GameEventScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { GameEventScalarFieldEnumSchema } from './internals'

export const GameEventGroupBySchema = Yup.object({ where: GameEventWhereInputObjectSchema, orderBy: GameEventOrderByWithAggregationInputObjectSchema, having: GameEventScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(GameEventScalarFieldEnumSchema).required()  }).required()