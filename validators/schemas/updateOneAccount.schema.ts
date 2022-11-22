import * as Yup from 'yup';
import { AccountUpdateInputObjectSchema, AccountWhereUniqueInputObjectSchema } from './internals'

export const AccountUpdateOneSchema = Yup.object({ data: AccountUpdateInputObjectSchema, where: AccountWhereUniqueInputObjectSchema  }).required()