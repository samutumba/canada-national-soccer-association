// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumStageFilterObjectSchema } from '../internals';

export const EnumStageFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumStageFilterObjectSchema])
});
