import * as Yup from 'yup';
import { ScholarshipWhereUniqueInputObjectSchema, ScholarshipCreateInputObjectSchema, ScholarshipUpdateInputObjectSchema } from './internals'

export const ScholarshipUpsertSchema = Yup.object({ where: ScholarshipWhereUniqueInputObjectSchema, data: ScholarshipCreateInputObjectSchema, update: ScholarshipUpdateInputObjectSchema  }).required()