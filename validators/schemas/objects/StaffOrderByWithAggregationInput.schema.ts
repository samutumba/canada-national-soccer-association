// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { StaffCountOrderByAggregateInputObjectSchema } from '../internals';;
import { StaffMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { StaffMinOrderByAggregateInputObjectSchema } from '../internals';

export const StaffOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  dob: SortOrderSchema,  phone: SortOrderSchema,  role: SortOrderSchema,  streetAddress: SortOrderSchema,  city: SortOrderSchema,  country: SortOrderSchema,  postalCode: SortOrderSchema,  accountId: SortOrderSchema,  _count: StaffCountOrderByAggregateInputObjectSchema,  _max: StaffMaxOrderByAggregateInputObjectSchema,  _min: StaffMinOrderByAggregateInputObjectSchema
});
