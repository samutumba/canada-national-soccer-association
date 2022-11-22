// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AccountWhereInputObjectSchema } from '../internals';

export const AccountRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([AccountWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([AccountWhereInputObjectSchema])
});
