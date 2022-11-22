import * as Yup from 'yup';
import { InstitutionWhereUniqueInputObjectSchema } from './internals'

export const InstitutionFindUniqueSchema = Yup.object({ where: InstitutionWhereUniqueInputObjectSchema }).required()