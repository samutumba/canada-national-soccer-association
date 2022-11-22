import * as Yup from 'yup';
import { AccountWhereInputObjectSchema, AccountOrderByWithAggregationInputObjectSchema, AccountScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { AccountScalarFieldEnumSchema } from './internals'

export const AccountGroupBySchema = Yup.object({ where: AccountWhereInputObjectSchema, orderBy: AccountOrderByWithAggregationInputObjectSchema, having: AccountScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(AccountScalarFieldEnumSchema).required()  }).required()