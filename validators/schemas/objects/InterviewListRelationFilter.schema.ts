// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InterviewWhereInputObjectSchema } from '../internals';

export const InterviewListRelationFilterObjectSchema = Yup.object({
    every: InterviewWhereInputObjectSchema,  some: InterviewWhereInputObjectSchema,  none: InterviewWhereInputObjectSchema
});
