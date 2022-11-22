import * as Yup from 'yup';
import { GameWhereInputObjectSchema, GameOrderByWithAggregationInputObjectSchema, GameScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { GameScalarFieldEnumSchema } from './internals'

export const GameGroupBySchema = Yup.object({ where: GameWhereInputObjectSchema, orderBy: GameOrderByWithAggregationInputObjectSchema, having: GameScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(GameScalarFieldEnumSchema).required()  }).required()