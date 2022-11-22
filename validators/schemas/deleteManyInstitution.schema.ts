import * as Yup from 'yup';
import { InstitutionWhereInputObjectSchema } from './internals'

export const InstitutionDeleteManySchema = Yup.object({ InstitutionWhereInputObjectSchema  }).required()