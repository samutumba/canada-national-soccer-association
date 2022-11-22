// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumRoleFilterObjectSchema } from '../internals';

export const EnumRoleFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumRoleFilterObjectSchema])
});
