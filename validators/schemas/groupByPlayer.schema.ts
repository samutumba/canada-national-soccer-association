import * as Yup from 'yup';
import { PlayerWhereInputObjectSchema, PlayerOrderByWithAggregationInputObjectSchema, PlayerScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { PlayerScalarFieldEnumSchema } from './internals'

export const PlayerGroupBySchema = Yup.object({ where: PlayerWhereInputObjectSchema, orderBy: PlayerOrderByWithAggregationInputObjectSchema, having: PlayerScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(PlayerScalarFieldEnumSchema).required()  }).required()