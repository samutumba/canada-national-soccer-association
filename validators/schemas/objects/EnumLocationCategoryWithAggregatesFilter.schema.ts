// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumLocationCategoryWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumLocationCategoryFilterObjectSchema } from '../internals';

export const EnumLocationCategoryWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumLocationCategoryWithAggregatesFilterObjectSchema]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumLocationCategoryFilterObjectSchema,  _max: NestedEnumLocationCategoryFilterObjectSchema
});
