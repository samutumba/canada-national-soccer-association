// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StaffWhereInputObjectSchema } from '../internals';

export const StaffListRelationFilterObjectSchema = Yup.object({
    every: StaffWhereInputObjectSchema,  some: StaffWhereInputObjectSchema,  none: StaffWhereInputObjectSchema
});
