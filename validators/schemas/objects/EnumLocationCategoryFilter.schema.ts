// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumLocationCategoryFilterObjectSchema } from '../internals';

export const EnumLocationCategoryFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumLocationCategoryFilterObjectSchema])
});
