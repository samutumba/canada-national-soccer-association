import * as Yup from 'yup';
import { InstitutionWhereUniqueInputObjectSchema } from './internals'

export const InstitutionDeleteOneSchema = Yup.object({ where: InstitutionWhereUniqueInputObjectSchema  }).required()