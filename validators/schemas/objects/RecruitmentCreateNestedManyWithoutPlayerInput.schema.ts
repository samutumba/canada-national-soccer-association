// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { RecruitmentCreateOrConnectWithoutPlayerInputObjectSchema } from '../internals';;
import { RecruitmentCreateManyPlayerInputEnvelopeObjectSchema } from '../internals';;
import { RecruitmentWhereUniqueInputObjectSchema } from '../internals';

export const RecruitmentCreateNestedManyWithoutPlayerInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([RecruitmentCreateWithoutPlayerInputObjectSchema,
Yup.array().of(RecruitmentCreateWithoutPlayerInputObjectSchema),
RecruitmentUncheckedCreateWithoutPlayerInputObjectSchema,
Yup.array().of(RecruitmentUncheckedCreateWithoutPlayerInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([RecruitmentCreateOrConnectWithoutPlayerInputObjectSchema,
Yup.array().of(RecruitmentCreateOrConnectWithoutPlayerInputObjectSchema)]),  createMany: RecruitmentCreateManyPlayerInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([RecruitmentWhereUniqueInputObjectSchema,
Yup.array().of(RecruitmentWhereUniqueInputObjectSchema)])
});
