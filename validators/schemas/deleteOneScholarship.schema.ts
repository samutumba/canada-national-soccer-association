import * as Yup from 'yup';
import { ScholarshipWhereUniqueInputObjectSchema } from './internals'

export const ScholarshipDeleteOneSchema = Yup.object({ where: ScholarshipWhereUniqueInputObjectSchema  }).required()