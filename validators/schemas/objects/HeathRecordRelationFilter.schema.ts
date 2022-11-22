// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { HeathRecordWhereInputObjectSchema } from '../internals';

export const HeathRecordRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([HeathRecordWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([HeathRecordWhereInputObjectSchema])
});
