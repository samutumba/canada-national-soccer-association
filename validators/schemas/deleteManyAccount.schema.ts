import * as Yup from 'yup';
import { AccountWhereInputObjectSchema } from './internals'

export const AccountDeleteManySchema = Yup.object({ AccountWhereInputObjectSchema  }).required()