// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateWithoutStaffInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutStaffInputObjectSchema } from '../internals';;
import { SquadCreateOrConnectWithoutStaffInputObjectSchema } from '../internals';;
import { SquadUpsertWithWhereUniqueWithoutStaffInputObjectSchema } from '../internals';;
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadUpdateWithWhereUniqueWithoutStaffInputObjectSchema } from '../internals';;
import { SquadUpdateManyWithWhereWithoutStaffInputObjectSchema } from '../internals';;
import { SquadScalarWhereInputObjectSchema } from '../internals';

export const SquadUncheckedUpdateManyWithoutStaffNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SquadCreateWithoutStaffInputObjectSchema,
Yup.array().of(SquadCreateWithoutStaffInputObjectSchema),
SquadUncheckedCreateWithoutStaffInputObjectSchema,
Yup.array().of(SquadUncheckedCreateWithoutStaffInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([SquadCreateOrConnectWithoutStaffInputObjectSchema,
Yup.array().of(SquadCreateOrConnectWithoutStaffInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([SquadUpsertWithWhereUniqueWithoutStaffInputObjectSchema,
Yup.array().of(SquadUpsertWithWhereUniqueWithoutStaffInputObjectSchema)]),  set: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([SquadUpdateWithWhereUniqueWithoutStaffInputObjectSchema,
Yup.array().of(SquadUpdateWithWhereUniqueWithoutStaffInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([SquadUpdateManyWithWhereWithoutStaffInputObjectSchema,
Yup.array().of(SquadUpdateManyWithWhereWithoutStaffInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([SquadScalarWhereInputObjectSchema,
Yup.array().of(SquadScalarWhereInputObjectSchema)])
});
