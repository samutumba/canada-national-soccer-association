import * as Yup from 'yup';
import { OperationWhereInputObjectSchema, OperationOrderByWithRelationInputObjectSchema, OperationWhereUniqueInputObjectSchema } from './internals'

export const OperationAggregateSchema = Yup.object({ where: OperationWhereInputObjectSchema, orderBy: OperationOrderByWithRelationInputObjectSchema, cursor: OperationWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()