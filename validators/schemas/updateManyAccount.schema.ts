import * as Yup from 'yup';
import { AccountUpdateManyMutationInputObjectSchema, AccountWhereInputObjectSchema } from './internals'

export const AccountUpdateManySchema = Yup.object({ data: AccountUpdateManyMutationInputObjectSchema, where: AccountWhereInputObjectSchema  }).required()