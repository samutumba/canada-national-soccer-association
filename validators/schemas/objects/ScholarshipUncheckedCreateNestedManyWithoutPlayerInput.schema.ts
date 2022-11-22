// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ScholarshipCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { ScholarshipUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { ScholarshipCreateOrConnectWithoutPlayerInputObjectSchema } from '../internals';;
import { ScholarshipCreateManyPlayerInputEnvelopeObjectSchema } from '../internals';;
import { ScholarshipWhereUniqueInputObjectSchema } from '../internals';

export const ScholarshipUncheckedCreateNestedManyWithoutPlayerInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ScholarshipCreateWithoutPlayerInputObjectSchema,
Yup.array().of(ScholarshipCreateWithoutPlayerInputObjectSchema),
ScholarshipUncheckedCreateWithoutPlayerInputObjectSchema,
Yup.array().of(ScholarshipUncheckedCreateWithoutPlayerInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ScholarshipCreateOrConnectWithoutPlayerInputObjectSchema,
Yup.array().of(ScholarshipCreateOrConnectWithoutPlayerInputObjectSchema)]),  createMany: ScholarshipCreateManyPlayerInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([ScholarshipWhereUniqueInputObjectSchema,
Yup.array().of(ScholarshipWhereUniqueInputObjectSchema)])
});
