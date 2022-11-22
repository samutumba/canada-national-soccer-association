import * as Yup from 'yup';
import { ScholarshipWhereUniqueInputObjectSchema } from './internals'

export const ScholarshipFindUniqueSchema = Yup.object({ where: ScholarshipWhereUniqueInputObjectSchema }).required()