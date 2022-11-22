// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const AccountMaxOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  username: SortOrderSchema,  password: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema
});
