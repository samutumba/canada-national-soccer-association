// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentWhereUniqueInputObjectSchema } from '../internals';;
import { RecruitmentCreateWithoutInterviewsInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedCreateWithoutInterviewsInputObjectSchema } from '../internals';

export const RecruitmentCreateOrConnectWithoutInterviewsInputObjectSchema = Yup.object({
    where: RecruitmentWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([RecruitmentCreateWithoutInterviewsInputObjectSchema,
RecruitmentUncheckedCreateWithoutInterviewsInputObjectSchema])
});
