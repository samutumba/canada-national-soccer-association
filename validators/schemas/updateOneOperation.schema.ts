import * as Yup from 'yup';
import { OperationUpdateInputObjectSchema, OperationWhereUniqueInputObjectSchema } from './internals'

export const OperationUpdateOneSchema = Yup.object({ data: OperationUpdateInputObjectSchema, where: OperationWhereUniqueInputObjectSchema  }).required()