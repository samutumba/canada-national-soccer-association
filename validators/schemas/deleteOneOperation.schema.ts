import * as Yup from 'yup';
import { OperationWhereUniqueInputObjectSchema } from './internals'

export const OperationDeleteOneSchema = Yup.object({ where: OperationWhereUniqueInputObjectSchema  }).required()