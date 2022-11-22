// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { PlayerOrderByWithRelationInputObjectSchema } from '../internals';

export const HeathRecordOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  cardNumber: SortOrderSchema,  issueDate: SortOrderSchema,  expiryDate: SortOrderSchema,  Player: PlayerOrderByWithRelationInputObjectSchema
});
