import * as Yup from 'yup';
import { InstitutionCreateInputObjectSchema } from './internals'

export const InstitutionCreateSchema = Yup.object({ data: InstitutionCreateInputObjectSchema  }).required()