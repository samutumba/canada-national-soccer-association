import * as Yup from 'yup';
import { AccountWhereUniqueInputObjectSchema } from './internals'

export const AccountFindUniqueSchema = Yup.object({ where: AccountWhereUniqueInputObjectSchema }).required()