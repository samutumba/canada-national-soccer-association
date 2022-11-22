import * as Yup from 'yup';
import { SeasonWhereInputObjectSchema, SeasonOrderByWithAggregationInputObjectSchema, SeasonScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { SeasonScalarFieldEnumSchema } from './internals'

export const SeasonGroupBySchema = Yup.object({ where: SeasonWhereInputObjectSchema, orderBy: SeasonOrderByWithAggregationInputObjectSchema, having: SeasonScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(SeasonScalarFieldEnumSchema).required()  }).required()