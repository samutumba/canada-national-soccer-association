// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { OperationCountOrderByAggregateInputObjectSchema } from '../internals';;
import { OperationMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { OperationMinOrderByAggregateInputObjectSchema } from '../internals';

export const OperationOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  type: SortOrderSchema,  date: SortOrderSchema,  injuryId: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  _count: OperationCountOrderByAggregateInputObjectSchema,  _max: OperationMaxOrderByAggregateInputObjectSchema,  _min: OperationMinOrderByAggregateInputObjectSchema
});
