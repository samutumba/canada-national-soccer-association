// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumEventFilterObjectSchema } from '../internals';

export const EnumEventFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumEventFilterObjectSchema])
});
