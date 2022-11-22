import * as Yup from 'yup';
import { OperationUpdateManyMutationInputObjectSchema, OperationWhereInputObjectSchema } from './internals'

export const OperationUpdateManySchema = Yup.object({ data: OperationUpdateManyMutationInputObjectSchema, where: OperationWhereInputObjectSchema  }).required()