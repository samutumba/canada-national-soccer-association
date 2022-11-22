// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumLocationCategoryFilterObjectSchema } from '../internals';

export const NestedEnumLocationCategoryWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumLocationCategoryWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumLocationCategoryFilterObjectSchema,  _max: NestedEnumLocationCategoryFilterObjectSchema
});
