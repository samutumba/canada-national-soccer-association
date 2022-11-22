// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumInstitutionCategoryFilterObjectSchema } from '../internals';

export const NestedEnumInstitutionCategoryWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumInstitutionCategoryWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumInstitutionCategoryFilterObjectSchema,  _max: NestedEnumInstitutionCategoryFilterObjectSchema
});
