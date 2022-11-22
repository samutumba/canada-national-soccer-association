import * as Yup from 'yup';
import { HeathRecordWhereInputObjectSchema, HeathRecordOrderByWithAggregationInputObjectSchema, HeathRecordScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { HeathRecordScalarFieldEnumSchema } from './internals'

export const HeathRecordGroupBySchema = Yup.object({ where: HeathRecordWhereInputObjectSchema, orderBy: HeathRecordOrderByWithAggregationInputObjectSchema, having: HeathRecordScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(HeathRecordScalarFieldEnumSchema).required()  }).required()