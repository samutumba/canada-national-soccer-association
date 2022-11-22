// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { InjuryOrderByWithRelationInputObjectSchema } from '../internals';

export const OperationOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  type: SortOrderSchema,  injury: InjuryOrderByWithRelationInputObjectSchema,  date: SortOrderSchema,  injuryId: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema
});
