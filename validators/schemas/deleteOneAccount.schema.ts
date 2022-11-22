import * as Yup from 'yup';
import { AccountWhereUniqueInputObjectSchema } from './internals'

export const AccountDeleteOneSchema = Yup.object({ where: AccountWhereUniqueInputObjectSchema  }).required()