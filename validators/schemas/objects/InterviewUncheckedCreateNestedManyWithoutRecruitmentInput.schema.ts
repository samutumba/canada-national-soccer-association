// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InterviewCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { InterviewUncheckedCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { InterviewCreateOrConnectWithoutRecruitmentInputObjectSchema } from '../internals';;
import { InterviewCreateManyRecruitmentInputEnvelopeObjectSchema } from '../internals';;
import { InterviewWhereUniqueInputObjectSchema } from '../internals';

export const InterviewUncheckedCreateNestedManyWithoutRecruitmentInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([InterviewCreateWithoutRecruitmentInputObjectSchema,
Yup.array().of(InterviewCreateWithoutRecruitmentInputObjectSchema),
InterviewUncheckedCreateWithoutRecruitmentInputObjectSchema,
Yup.array().of(InterviewUncheckedCreateWithoutRecruitmentInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([InterviewCreateOrConnectWithoutRecruitmentInputObjectSchema,
Yup.array().of(InterviewCreateOrConnectWithoutRecruitmentInputObjectSchema)]),  createMany: InterviewCreateManyRecruitmentInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([InterviewWhereUniqueInputObjectSchema,
Yup.array().of(InterviewWhereUniqueInputObjectSchema)])
});
