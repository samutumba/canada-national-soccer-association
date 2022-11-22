import * as Yup from 'yup';
import { ScholarshipWhereInputObjectSchema } from './internals'

export const ScholarshipDeleteManySchema = Yup.object({ ScholarshipWhereInputObjectSchema  }).required()