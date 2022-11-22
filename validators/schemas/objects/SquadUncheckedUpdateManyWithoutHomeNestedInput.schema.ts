// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateWithoutHomeInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutHomeInputObjectSchema } from '../internals';;
import { SquadCreateOrConnectWithoutHomeInputObjectSchema } from '../internals';;
import { SquadUpsertWithWhereUniqueWithoutHomeInputObjectSchema } from '../internals';;
import { SquadCreateManyHomeInputEnvelopeObjectSchema } from '../internals';;
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadUpdateWithWhereUniqueWithoutHomeInputObjectSchema } from '../internals';;
import { SquadUpdateManyWithWhereWithoutHomeInputObjectSchema } from '../internals';;
import { SquadScalarWhereInputObjectSchema } from '../internals';

export const SquadUncheckedUpdateManyWithoutHomeNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SquadCreateWithoutHomeInputObjectSchema,
Yup.array().of(SquadCreateWithoutHomeInputObjectSchema),
SquadUncheckedCreateWithoutHomeInputObjectSchema,
Yup.array().of(SquadUncheckedCreateWithoutHomeInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([SquadCreateOrConnectWithoutHomeInputObjectSchema,
Yup.array().of(SquadCreateOrConnectWithoutHomeInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([SquadUpsertWithWhereUniqueWithoutHomeInputObjectSchema,
Yup.array().of(SquadUpsertWithWhereUniqueWithoutHomeInputObjectSchema)]),  createMany: SquadCreateManyHomeInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([SquadUpdateWithWhereUniqueWithoutHomeInputObjectSchema,
Yup.array().of(SquadUpdateWithWhereUniqueWithoutHomeInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([SquadUpdateManyWithWhereWithoutHomeInputObjectSchema,
Yup.array().of(SquadUpdateManyWithWhereWithoutHomeInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([SquadScalarWhereInputObjectSchema,
Yup.array().of(SquadScalarWhereInputObjectSchema)])
});
