import * as Yup from 'yup';
import { OperationCreateInputObjectSchema } from './internals'

export const OperationCreateSchema = Yup.object({ data: OperationCreateInputObjectSchema  }).required()