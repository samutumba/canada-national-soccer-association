import * as Yup from 'yup';
import { OperationWhereInputObjectSchema } from './internals'

export const OperationDeleteManySchema = Yup.object({ OperationWhereInputObjectSchema  }).required()