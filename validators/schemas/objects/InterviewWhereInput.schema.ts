// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { EnumStageFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { RecruitmentRelationFilterObjectSchema } from '../internals';;
import { RecruitmentWhereInputObjectSchema } from '../internals';

export const InterviewWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => InterviewWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => InterviewWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => InterviewWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => InterviewWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => InterviewWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  stage: Yup.mixed().oneOfSchemas([EnumStageFilterObjectSchema]),  passed: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  at: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  Recruitment: Yup.mixed().oneOfSchemas([RecruitmentRelationFilterObjectSchema,
RecruitmentWhereInputObjectSchema]),  comment: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  recruitmentId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema])
});
