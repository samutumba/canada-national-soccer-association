import * as Yup from 'yup';
import { ScholarshipWhereInputObjectSchema, ScholarshipOrderByWithAggregationInputObjectSchema, ScholarshipScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { ScholarshipScalarFieldEnumSchema } from './internals'

export const ScholarshipGroupBySchema = Yup.object({ where: ScholarshipWhereInputObjectSchema, orderBy: ScholarshipOrderByWithAggregationInputObjectSchema, having: ScholarshipScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(ScholarshipScalarFieldEnumSchema).required()  }).required()