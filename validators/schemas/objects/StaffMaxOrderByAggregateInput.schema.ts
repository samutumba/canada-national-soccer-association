// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const StaffMaxOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  dob: SortOrderSchema,  phone: SortOrderSchema,  role: SortOrderSchema,  streetAddress: SortOrderSchema,  city: SortOrderSchema,  country: SortOrderSchema,  postalCode: SortOrderSchema,  accountId: SortOrderSchema
});
