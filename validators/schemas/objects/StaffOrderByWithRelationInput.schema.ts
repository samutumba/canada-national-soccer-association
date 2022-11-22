// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { AccountOrderByWithRelationInputObjectSchema } from '../internals';;
import { SquadOrderByRelationAggregateInputObjectSchema } from '../internals';

export const StaffOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  dob: SortOrderSchema,  phone: SortOrderSchema,  role: SortOrderSchema,  streetAddress: SortOrderSchema,  city: SortOrderSchema,  country: SortOrderSchema,  postalCode: SortOrderSchema,  account: AccountOrderByWithRelationInputObjectSchema,  accountId: SortOrderSchema,  Squad: SquadOrderByRelationAggregateInputObjectSchema
});
