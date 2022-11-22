// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentCreateWithoutRecruiterInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedCreateWithoutRecruiterInputObjectSchema } from '../internals';;
import { RecruitmentCreateOrConnectWithoutRecruiterInputObjectSchema } from '../internals';;
import { RecruitmentCreateManyRecruiterInputEnvelopeObjectSchema } from '../internals';;
import { RecruitmentWhereUniqueInputObjectSchema } from '../internals';

export const RecruitmentCreateNestedManyWithoutRecruiterInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([RecruitmentCreateWithoutRecruiterInputObjectSchema,
Yup.array().of(RecruitmentCreateWithoutRecruiterInputObjectSchema),
RecruitmentUncheckedCreateWithoutRecruiterInputObjectSchema,
Yup.array().of(RecruitmentUncheckedCreateWithoutRecruiterInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([RecruitmentCreateOrConnectWithoutRecruiterInputObjectSchema,
Yup.array().of(RecruitmentCreateOrConnectWithoutRecruiterInputObjectSchema)]),  createMany: RecruitmentCreateManyRecruiterInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([RecruitmentWhereUniqueInputObjectSchema,
Yup.array().of(RecruitmentWhereUniqueInputObjectSchema)])
});
