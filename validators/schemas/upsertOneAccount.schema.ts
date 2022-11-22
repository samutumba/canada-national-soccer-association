import * as Yup from 'yup';
import { AccountWhereUniqueInputObjectSchema, AccountCreateInputObjectSchema, AccountUpdateInputObjectSchema } from './internals'

export const AccountUpsertSchema = Yup.object({ where: AccountWhereUniqueInputObjectSchema, data: AccountCreateInputObjectSchema, update: AccountUpdateInputObjectSchema  }).required()