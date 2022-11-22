// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumCompetitionTypeFilterObjectSchema } from '../internals';

export const EnumCompetitionTypeFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumCompetitionTypeFilterObjectSchema])
});
