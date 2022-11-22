// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentUpdateWithoutInterviewsInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedUpdateWithoutInterviewsInputObjectSchema } from '../internals';;
import { RecruitmentCreateWithoutInterviewsInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedCreateWithoutInterviewsInputObjectSchema } from '../internals';

export const RecruitmentUpsertWithoutInterviewsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([RecruitmentUpdateWithoutInterviewsInputObjectSchema,
RecruitmentUncheckedUpdateWithoutInterviewsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([RecruitmentCreateWithoutInterviewsInputObjectSchema,
RecruitmentUncheckedCreateWithoutInterviewsInputObjectSchema])
});
