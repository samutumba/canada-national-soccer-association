// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ScholarshipCreateWithoutSponsorInputObjectSchema } from '../internals';;
import { ScholarshipUncheckedCreateWithoutSponsorInputObjectSchema } from '../internals';;
import { ScholarshipCreateOrConnectWithoutSponsorInputObjectSchema } from '../internals';;
import { ScholarshipCreateManySponsorInputEnvelopeObjectSchema } from '../internals';;
import { ScholarshipWhereUniqueInputObjectSchema } from '../internals';

export const ScholarshipUncheckedCreateNestedManyWithoutSponsorInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ScholarshipCreateWithoutSponsorInputObjectSchema,
Yup.array().of(ScholarshipCreateWithoutSponsorInputObjectSchema),
ScholarshipUncheckedCreateWithoutSponsorInputObjectSchema,
Yup.array().of(ScholarshipUncheckedCreateWithoutSponsorInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ScholarshipCreateOrConnectWithoutSponsorInputObjectSchema,
Yup.array().of(ScholarshipCreateOrConnectWithoutSponsorInputObjectSchema)]),  createMany: ScholarshipCreateManySponsorInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([ScholarshipWhereUniqueInputObjectSchema,
Yup.array().of(ScholarshipWhereUniqueInputObjectSchema)])
});
