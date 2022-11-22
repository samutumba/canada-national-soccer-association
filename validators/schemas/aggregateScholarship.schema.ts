import * as Yup from 'yup';
import { ScholarshipWhereInputObjectSchema, ScholarshipOrderByWithRelationInputObjectSchema, ScholarshipWhereUniqueInputObjectSchema } from './internals'

export const ScholarshipAggregateSchema = Yup.object({ where: ScholarshipWhereInputObjectSchema, orderBy: ScholarshipOrderByWithRelationInputObjectSchema, cursor: ScholarshipWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()