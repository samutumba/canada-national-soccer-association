import * as Yup from 'yup';
import { HeathRecordWhereInputObjectSchema, HeathRecordOrderByWithRelationInputObjectSchema, HeathRecordWhereUniqueInputObjectSchema } from './internals'

export const HeathRecordAggregateSchema = Yup.object({ where: HeathRecordWhereInputObjectSchema, orderBy: HeathRecordOrderByWithRelationInputObjectSchema, cursor: HeathRecordWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()