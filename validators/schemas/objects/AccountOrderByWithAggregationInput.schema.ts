// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { AccountCountOrderByAggregateInputObjectSchema } from '../internals';;
import { AccountMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { AccountMinOrderByAggregateInputObjectSchema } from '../internals';

export const AccountOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  username: SortOrderSchema,  password: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  _count: AccountCountOrderByAggregateInputObjectSchema,  _max: AccountMaxOrderByAggregateInputObjectSchema,  _min: AccountMinOrderByAggregateInputObjectSchema
});
