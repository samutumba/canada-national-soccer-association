import * as Yup from 'yup';
import { OperationWhereUniqueInputObjectSchema } from './internals'

export const OperationFindUniqueSchema = Yup.object({ where: OperationWhereUniqueInputObjectSchema }).required()