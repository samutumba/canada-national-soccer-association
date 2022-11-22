import * as Yup from 'yup';
import { ScholarshipUpdateInputObjectSchema, ScholarshipWhereUniqueInputObjectSchema } from './internals'

export const ScholarshipUpdateOneSchema = Yup.object({ data: ScholarshipUpdateInputObjectSchema, where: ScholarshipWhereUniqueInputObjectSchema  }).required()