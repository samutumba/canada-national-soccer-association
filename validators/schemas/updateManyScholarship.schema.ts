import * as Yup from 'yup';
import { ScholarshipUpdateManyMutationInputObjectSchema, ScholarshipWhereInputObjectSchema } from './internals'

export const ScholarshipUpdateManySchema = Yup.object({ data: ScholarshipUpdateManyMutationInputObjectSchema, where: ScholarshipWhereInputObjectSchema  }).required()