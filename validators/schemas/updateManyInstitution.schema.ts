import * as Yup from 'yup';
import { InstitutionUpdateManyMutationInputObjectSchema, InstitutionWhereInputObjectSchema } from './internals'

export const InstitutionUpdateManySchema = Yup.object({ data: InstitutionUpdateManyMutationInputObjectSchema, where: InstitutionWhereInputObjectSchema  }).required()