// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const OperationMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  type: SortOrderSchema,  date: SortOrderSchema,  injuryId: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema
});
