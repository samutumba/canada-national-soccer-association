import * as Yup from 'yup';
import { InstitutionUpdateInputObjectSchema, InstitutionWhereUniqueInputObjectSchema } from './internals'

export const InstitutionUpdateOneSchema = Yup.object({ data: InstitutionUpdateInputObjectSchema, where: InstitutionWhereUniqueInputObjectSchema  }).required()