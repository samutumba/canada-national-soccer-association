// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { RecruitmentCreateOrConnectWithoutPlayerInputObjectSchema } from '../internals';;
import { RecruitmentUpsertWithWhereUniqueWithoutPlayerInputObjectSchema } from '../internals';;
import { RecruitmentCreateManyPlayerInputEnvelopeObjectSchema } from '../internals';;
import { RecruitmentWhereUniqueInputObjectSchema } from '../internals';;
import { RecruitmentUpdateWithWhereUniqueWithoutPlayerInputObjectSchema } from '../internals';;
import { RecruitmentUpdateManyWithWhereWithoutPlayerInputObjectSchema } from '../internals';;
import { RecruitmentScalarWhereInputObjectSchema } from '../internals';

export const RecruitmentUpdateManyWithoutPlayerNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([RecruitmentCreateWithoutPlayerInputObjectSchema,
Yup.array().of(RecruitmentCreateWithoutPlayerInputObjectSchema),
RecruitmentUncheckedCreateWithoutPlayerInputObjectSchema,
Yup.array().of(RecruitmentUncheckedCreateWithoutPlayerInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([RecruitmentCreateOrConnectWithoutPlayerInputObjectSchema,
Yup.array().of(RecruitmentCreateOrConnectWithoutPlayerInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([RecruitmentUpsertWithWhereUniqueWithoutPlayerInputObjectSchema,
Yup.array().of(RecruitmentUpsertWithWhereUniqueWithoutPlayerInputObjectSchema)]),  createMany: RecruitmentCreateManyPlayerInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([RecruitmentWhereUniqueInputObjectSchema,
Yup.array().of(RecruitmentWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([RecruitmentWhereUniqueInputObjectSchema,
Yup.array().of(RecruitmentWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([RecruitmentWhereUniqueInputObjectSchema,
Yup.array().of(RecruitmentWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([RecruitmentWhereUniqueInputObjectSchema,
Yup.array().of(RecruitmentWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([RecruitmentUpdateWithWhereUniqueWithoutPlayerInputObjectSchema,
Yup.array().of(RecruitmentUpdateWithWhereUniqueWithoutPlayerInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([RecruitmentUpdateManyWithWhereWithoutPlayerInputObjectSchema,
Yup.array().of(RecruitmentUpdateManyWithWhereWithoutPlayerInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([RecruitmentScalarWhereInputObjectSchema,
Yup.array().of(RecruitmentScalarWhereInputObjectSchema)])
});
