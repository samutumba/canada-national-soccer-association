// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentCreateWithoutRecruiterInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedCreateWithoutRecruiterInputObjectSchema } from '../internals';;
import { RecruitmentCreateOrConnectWithoutRecruiterInputObjectSchema } from '../internals';;
import { RecruitmentUpsertWithWhereUniqueWithoutRecruiterInputObjectSchema } from '../internals';;
import { RecruitmentCreateManyRecruiterInputEnvelopeObjectSchema } from '../internals';;
import { RecruitmentWhereUniqueInputObjectSchema } from '../internals';;
import { RecruitmentUpdateWithWhereUniqueWithoutRecruiterInputObjectSchema } from '../internals';;
import { RecruitmentUpdateManyWithWhereWithoutRecruiterInputObjectSchema } from '../internals';;
import { RecruitmentScalarWhereInputObjectSchema } from '../internals';

export const RecruitmentUncheckedUpdateManyWithoutRecruiterNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([RecruitmentCreateWithoutRecruiterInputObjectSchema,
Yup.array().of(RecruitmentCreateWithoutRecruiterInputObjectSchema),
RecruitmentUncheckedCreateWithoutRecruiterInputObjectSchema,
Yup.array().of(RecruitmentUncheckedCreateWithoutRecruiterInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([RecruitmentCreateOrConnectWithoutRecruiterInputObjectSchema,
Yup.array().of(RecruitmentCreateOrConnectWithoutRecruiterInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([RecruitmentUpsertWithWhereUniqueWithoutRecruiterInputObjectSchema,
Yup.array().of(RecruitmentUpsertWithWhereUniqueWithoutRecruiterInputObjectSchema)]),  createMany: RecruitmentCreateManyRecruiterInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([RecruitmentWhereUniqueInputObjectSchema,
Yup.array().of(RecruitmentWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([RecruitmentWhereUniqueInputObjectSchema,
Yup.array().of(RecruitmentWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([RecruitmentWhereUniqueInputObjectSchema,
Yup.array().of(RecruitmentWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([RecruitmentWhereUniqueInputObjectSchema,
Yup.array().of(RecruitmentWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([RecruitmentUpdateWithWhereUniqueWithoutRecruiterInputObjectSchema,
Yup.array().of(RecruitmentUpdateWithWhereUniqueWithoutRecruiterInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([RecruitmentUpdateManyWithWhereWithoutRecruiterInputObjectSchema,
Yup.array().of(RecruitmentUpdateManyWithWhereWithoutRecruiterInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([RecruitmentScalarWhereInputObjectSchema,
Yup.array().of(RecruitmentScalarWhereInputObjectSchema)])
});
