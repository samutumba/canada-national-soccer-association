import * as Yup from 'yup';
import { SquadWhereInputObjectSchema, SquadOrderByWithAggregationInputObjectSchema, SquadScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { SquadScalarFieldEnumSchema } from './internals'

export const SquadGroupBySchema = Yup.object({ where: SquadWhereInputObjectSchema, orderBy: SquadOrderByWithAggregationInputObjectSchema, having: SquadScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(SquadScalarFieldEnumSchema).required()  }).required()