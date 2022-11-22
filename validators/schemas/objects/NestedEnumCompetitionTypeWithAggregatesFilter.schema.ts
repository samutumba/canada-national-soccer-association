// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumCompetitionTypeFilterObjectSchema } from '../internals';

export const NestedEnumCompetitionTypeWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumCompetitionTypeWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumCompetitionTypeFilterObjectSchema,  _max: NestedEnumCompetitionTypeFilterObjectSchema
});
