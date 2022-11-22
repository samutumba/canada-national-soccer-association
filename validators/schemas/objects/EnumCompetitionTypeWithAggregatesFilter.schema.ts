// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumCompetitionTypeWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumCompetitionTypeFilterObjectSchema } from '../internals';

export const EnumCompetitionTypeWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumCompetitionTypeWithAggregatesFilterObjectSchema]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumCompetitionTypeFilterObjectSchema,  _max: NestedEnumCompetitionTypeFilterObjectSchema
});
