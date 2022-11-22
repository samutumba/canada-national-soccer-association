// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumInstitutionCategoryFilterObjectSchema } from '../internals';

export const EnumInstitutionCategoryFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumInstitutionCategoryFilterObjectSchema])
});
