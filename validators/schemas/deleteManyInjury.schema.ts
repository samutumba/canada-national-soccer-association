import * as Yup from 'yup';
import { InjuryWhereInputObjectSchema } from './internals'

export const InjuryDeleteManySchema = Yup.object({ InjuryWhereInputObjectSchema  }).required()