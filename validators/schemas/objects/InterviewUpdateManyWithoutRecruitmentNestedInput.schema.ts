// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InterviewCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { InterviewUncheckedCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { InterviewCreateOrConnectWithoutRecruitmentInputObjectSchema } from '../internals';;
import { InterviewUpsertWithWhereUniqueWithoutRecruitmentInputObjectSchema } from '../internals';;
import { InterviewCreateManyRecruitmentInputEnvelopeObjectSchema } from '../internals';;
import { InterviewWhereUniqueInputObjectSchema } from '../internals';;
import { InterviewUpdateWithWhereUniqueWithoutRecruitmentInputObjectSchema } from '../internals';;
import { InterviewUpdateManyWithWhereWithoutRecruitmentInputObjectSchema } from '../internals';;
import { InterviewScalarWhereInputObjectSchema } from '../internals';

export const InterviewUpdateManyWithoutRecruitmentNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([InterviewCreateWithoutRecruitmentInputObjectSchema,
Yup.array().of(InterviewCreateWithoutRecruitmentInputObjectSchema),
InterviewUncheckedCreateWithoutRecruitmentInputObjectSchema,
Yup.array().of(InterviewUncheckedCreateWithoutRecruitmentInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([InterviewCreateOrConnectWithoutRecruitmentInputObjectSchema,
Yup.array().of(InterviewCreateOrConnectWithoutRecruitmentInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([InterviewUpsertWithWhereUniqueWithoutRecruitmentInputObjectSchema,
Yup.array().of(InterviewUpsertWithWhereUniqueWithoutRecruitmentInputObjectSchema)]),  createMany: InterviewCreateManyRecruitmentInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([InterviewWhereUniqueInputObjectSchema,
Yup.array().of(InterviewWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([InterviewWhereUniqueInputObjectSchema,
Yup.array().of(InterviewWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([InterviewWhereUniqueInputObjectSchema,
Yup.array().of(InterviewWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([InterviewWhereUniqueInputObjectSchema,
Yup.array().of(InterviewWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([InterviewUpdateWithWhereUniqueWithoutRecruitmentInputObjectSchema,
Yup.array().of(InterviewUpdateWithWhereUniqueWithoutRecruitmentInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([InterviewUpdateManyWithWhereWithoutRecruitmentInputObjectSchema,
Yup.array().of(InterviewUpdateManyWithWhereWithoutRecruitmentInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([InterviewScalarWhereInputObjectSchema,
Yup.array().of(InterviewScalarWhereInputObjectSchema)])
});
