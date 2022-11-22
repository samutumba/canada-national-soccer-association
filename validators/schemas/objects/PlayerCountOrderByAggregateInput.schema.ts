// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const PlayerCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  dob: SortOrderSchema,  isDomestic: SortOrderSchema,  photo: SortOrderSchema,  gender: SortOrderSchema,  position: SortOrderSchema,  heathRecordId: SortOrderSchema,  phone: SortOrderSchema,  streetAddress: SortOrderSchema,  city: SortOrderSchema,  province: SortOrderSchema,  country: SortOrderSchema,  postalCode: SortOrderSchema
});
