import * as Yup from 'yup';
import { ScholarshipCreateInputObjectSchema } from './internals'

export const ScholarshipCreateSchema = Yup.object({ data: ScholarshipCreateInputObjectSchema  }).required()