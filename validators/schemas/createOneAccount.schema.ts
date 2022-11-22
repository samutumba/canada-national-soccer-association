import * as Yup from 'yup';
import { AccountCreateInputObjectSchema } from './internals'

export const AccountCreateSchema = Yup.object({ data: AccountCreateInputObjectSchema  }).required()