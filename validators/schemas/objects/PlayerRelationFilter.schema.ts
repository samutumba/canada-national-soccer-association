// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerWhereInputObjectSchema } from '../internals';

export const PlayerRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([PlayerWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([PlayerWhereInputObjectSchema])
});
