// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const TeamMaxOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  formation: SortOrderSchema,  shirtColor: SortOrderSchema,  squadId: SortOrderSchema,  gameId: SortOrderSchema
});
