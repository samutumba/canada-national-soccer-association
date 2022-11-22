// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameWhereInputObjectSchema } from '../internals';

export const GameRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([GameWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([GameWhereInputObjectSchema])
});
