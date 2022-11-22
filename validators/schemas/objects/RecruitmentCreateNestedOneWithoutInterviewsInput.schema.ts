// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentCreateWithoutInterviewsInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedCreateWithoutInterviewsInputObjectSchema } from '../internals';;
import { RecruitmentCreateOrConnectWithoutInterviewsInputObjectSchema } from '../internals';;
import { RecruitmentWhereUniqueInputObjectSchema } from '../internals';

export const RecruitmentCreateNestedOneWithoutInterviewsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([RecruitmentCreateWithoutInterviewsInputObjectSchema,
RecruitmentUncheckedCreateWithoutInterviewsInputObjectSchema]),  connectOrCreate: RecruitmentCreateOrConnectWithoutInterviewsInputObjectSchema,  connect: RecruitmentWhereUniqueInputObjectSchema
});
