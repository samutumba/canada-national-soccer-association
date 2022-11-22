import * as Yup from 'yup';
import { AccountWhereInputObjectSchema, AccountOrderByWithRelationInputObjectSchema, AccountWhereUniqueInputObjectSchema } from './internals';
import { AccountScalarFieldEnumSchema } from './internals'

export const AccountFindManySchema = Yup.object({ where: AccountWhereInputObjectSchema, orderBy: AccountOrderByWithRelationInputObjectSchema, cursor: AccountWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(AccountScalarFieldEnumSchema)  }).required()