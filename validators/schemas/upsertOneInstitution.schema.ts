import * as Yup from 'yup';
import { InstitutionWhereUniqueInputObjectSchema, InstitutionCreateInputObjectSchema, InstitutionUpdateInputObjectSchema } from './internals'

export const InstitutionUpsertSchema = Yup.object({ where: InstitutionWhereUniqueInputObjectSchema, data: InstitutionCreateInputObjectSchema, update: InstitutionUpdateInputObjectSchema  }).required()