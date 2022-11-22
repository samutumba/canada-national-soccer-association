// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const SquadCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  institutionId: SortOrderSchema,  homeColor: SortOrderSchema,  awayColor: SortOrderSchema,  locationId: SortOrderSchema
});
