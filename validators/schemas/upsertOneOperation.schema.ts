import * as Yup from 'yup';
import { OperationWhereUniqueInputObjectSchema, OperationCreateInputObjectSchema, OperationUpdateInputObjectSchema } from './internals'

export const OperationUpsertSchema = Yup.object({ where: OperationWhereUniqueInputObjectSchema, data: OperationCreateInputObjectSchema, update: OperationUpdateInputObjectSchema  }).required()