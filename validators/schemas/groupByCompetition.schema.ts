import * as Yup from 'yup';
import { CompetitionWhereInputObjectSchema, CompetitionOrderByWithAggregationInputObjectSchema, CompetitionScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { CompetitionScalarFieldEnumSchema } from './internals'

export const CompetitionGroupBySchema = Yup.object({ where: CompetitionWhereInputObjectSchema, orderBy: CompetitionOrderByWithAggregationInputObjectSchema, having: CompetitionScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(CompetitionScalarFieldEnumSchema).required()  }).required()