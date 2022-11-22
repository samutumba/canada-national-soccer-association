// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ScholarshipCreateWithoutSponsorInputObjectSchema } from '../internals';;
import { ScholarshipUncheckedCreateWithoutSponsorInputObjectSchema } from '../internals';;
import { ScholarshipCreateOrConnectWithoutSponsorInputObjectSchema } from '../internals';;
import { ScholarshipUpsertWithWhereUniqueWithoutSponsorInputObjectSchema } from '../internals';;
import { ScholarshipCreateManySponsorInputEnvelopeObjectSchema } from '../internals';;
import { ScholarshipWhereUniqueInputObjectSchema } from '../internals';;
import { ScholarshipUpdateWithWhereUniqueWithoutSponsorInputObjectSchema } from '../internals';;
import { ScholarshipUpdateManyWithWhereWithoutSponsorInputObjectSchema } from '../internals';;
import { ScholarshipScalarWhereInputObjectSchema } from '../internals';

export const ScholarshipUncheckedUpdateManyWithoutSponsorNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ScholarshipCreateWithoutSponsorInputObjectSchema,
Yup.array().of(ScholarshipCreateWithoutSponsorInputObjectSchema),
ScholarshipUncheckedCreateWithoutSponsorInputObjectSchema,
Yup.array().of(ScholarshipUncheckedCreateWithoutSponsorInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ScholarshipCreateOrConnectWithoutSponsorInputObjectSchema,
Yup.array().of(ScholarshipCreateOrConnectWithoutSponsorInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([ScholarshipUpsertWithWhereUniqueWithoutSponsorInputObjectSchema,
Yup.array().of(ScholarshipUpsertWithWhereUniqueWithoutSponsorInputObjectSchema)]),  createMany: ScholarshipCreateManySponsorInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([ScholarshipWhereUniqueInputObjectSchema,
Yup.array().of(ScholarshipWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([ScholarshipWhereUniqueInputObjectSchema,
Yup.array().of(ScholarshipWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([ScholarshipWhereUniqueInputObjectSchema,
Yup.array().of(ScholarshipWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([ScholarshipWhereUniqueInputObjectSchema,
Yup.array().of(ScholarshipWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([ScholarshipUpdateWithWhereUniqueWithoutSponsorInputObjectSchema,
Yup.array().of(ScholarshipUpdateWithWhereUniqueWithoutSponsorInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([ScholarshipUpdateManyWithWhereWithoutSponsorInputObjectSchema,
Yup.array().of(ScholarshipUpdateManyWithWhereWithoutSponsorInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([ScholarshipScalarWhereInputObjectSchema,
Yup.array().of(ScholarshipScalarWhereInputObjectSchema)])
});
