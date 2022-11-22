// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumInstitutionCategoryWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumInstitutionCategoryFilterObjectSchema } from '../internals';

export const EnumInstitutionCategoryWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumInstitutionCategoryWithAggregatesFilterObjectSchema]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumInstitutionCategoryFilterObjectSchema,  _max: NestedEnumInstitutionCategoryFilterObjectSchema
});
