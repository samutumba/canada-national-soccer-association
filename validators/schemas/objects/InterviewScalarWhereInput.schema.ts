// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { EnumStageFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';

export const InterviewScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => InterviewScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => InterviewScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => InterviewScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => InterviewScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => InterviewScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  stage: Yup.mixed().oneOfSchemas([EnumStageFilterObjectSchema]),  passed: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  at: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  comment: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  recruitmentId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema])
});
