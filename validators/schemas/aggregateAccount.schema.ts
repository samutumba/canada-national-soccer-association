import * as Yup from 'yup';
import { AccountWhereInputObjectSchema, AccountOrderByWithRelationInputObjectSchema, AccountWhereUniqueInputObjectSchema } from './internals'

export const AccountAggregateSchema = Yup.object({ where: AccountWhereInputObjectSchema, orderBy: AccountOrderByWithRelationInputObjectSchema, cursor: AccountWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()