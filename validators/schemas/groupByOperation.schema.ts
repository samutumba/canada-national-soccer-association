import * as Yup from 'yup';
import { OperationWhereInputObjectSchema, OperationOrderByWithAggregationInputObjectSchema, OperationScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { OperationScalarFieldEnumSchema } from './internals'

export const OperationGroupBySchema = Yup.object({ where: OperationWhereInputObjectSchema, orderBy: OperationOrderByWithAggregationInputObjectSchema, having: OperationScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(OperationScalarFieldEnumSchema).required()  }).required()