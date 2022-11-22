// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ScholarshipCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { ScholarshipUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { ScholarshipCreateOrConnectWithoutPlayerInputObjectSchema } from '../internals';;
import { ScholarshipUpsertWithWhereUniqueWithoutPlayerInputObjectSchema } from '../internals';;
import { ScholarshipCreateManyPlayerInputEnvelopeObjectSchema } from '../internals';;
import { ScholarshipWhereUniqueInputObjectSchema } from '../internals';;
import { ScholarshipUpdateWithWhereUniqueWithoutPlayerInputObjectSchema } from '../internals';;
import { ScholarshipUpdateManyWithWhereWithoutPlayerInputObjectSchema } from '../internals';;
import { ScholarshipScalarWhereInputObjectSchema } from '../internals';

export const ScholarshipUncheckedUpdateManyWithoutPlayerNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ScholarshipCreateWithoutPlayerInputObjectSchema,
Yup.array().of(ScholarshipCreateWithoutPlayerInputObjectSchema),
ScholarshipUncheckedCreateWithoutPlayerInputObjectSchema,
Yup.array().of(ScholarshipUncheckedCreateWithoutPlayerInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ScholarshipCreateOrConnectWithoutPlayerInputObjectSchema,
Yup.array().of(ScholarshipCreateOrConnectWithoutPlayerInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([ScholarshipUpsertWithWhereUniqueWithoutPlayerInputObjectSchema,
Yup.array().of(ScholarshipUpsertWithWhereUniqueWithoutPlayerInputObjectSchema)]),  createMany: ScholarshipCreateManyPlayerInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([ScholarshipWhereUniqueInputObjectSchema,
Yup.array().of(ScholarshipWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([ScholarshipWhereUniqueInputObjectSchema,
Yup.array().of(ScholarshipWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([ScholarshipWhereUniqueInputObjectSchema,
Yup.array().of(ScholarshipWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([ScholarshipWhereUniqueInputObjectSchema,
Yup.array().of(ScholarshipWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([ScholarshipUpdateWithWhereUniqueWithoutPlayerInputObjectSchema,
Yup.array().of(ScholarshipUpdateWithWhereUniqueWithoutPlayerInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([ScholarshipUpdateManyWithWhereWithoutPlayerInputObjectSchema,
Yup.array().of(ScholarshipUpdateManyWithWhereWithoutPlayerInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([ScholarshipScalarWhereInputObjectSchema,
Yup.array().of(ScholarshipScalarWhereInputObjectSchema)])
});
