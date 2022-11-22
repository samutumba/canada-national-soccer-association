// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumPostionFilterObjectSchema } from '../internals';

export const EnumPostionFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumPostionFilterObjectSchema])
});
