// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumFormationFilterObjectSchema } from '../internals';

export const EnumFormationFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumFormationFilterObjectSchema])
});
