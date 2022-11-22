// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameEventCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { GameEventUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { GameEventCreateOrConnectWithoutPlayerInputObjectSchema } from '../internals';;
import { GameEventUpsertWithWhereUniqueWithoutPlayerInputObjectSchema } from '../internals';;
import { GameEventCreateManyPlayerInputEnvelopeObjectSchema } from '../internals';;
import { GameEventWhereUniqueInputObjectSchema } from '../internals';;
import { GameEventUpdateWithWhereUniqueWithoutPlayerInputObjectSchema } from '../internals';;
import { GameEventUpdateManyWithWhereWithoutPlayerInputObjectSchema } from '../internals';;
import { GameEventScalarWhereInputObjectSchema } from '../internals';

export const GameEventUpdateManyWithoutPlayerNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([GameEventCreateWithoutPlayerInputObjectSchema,
Yup.array().of(GameEventCreateWithoutPlayerInputObjectSchema),
GameEventUncheckedCreateWithoutPlayerInputObjectSchema,
Yup.array().of(GameEventUncheckedCreateWithoutPlayerInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([GameEventCreateOrConnectWithoutPlayerInputObjectSchema,
Yup.array().of(GameEventCreateOrConnectWithoutPlayerInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([GameEventUpsertWithWhereUniqueWithoutPlayerInputObjectSchema,
Yup.array().of(GameEventUpsertWithWhereUniqueWithoutPlayerInputObjectSchema)]),  createMany: GameEventCreateManyPlayerInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([GameEventWhereUniqueInputObjectSchema,
Yup.array().of(GameEventWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([GameEventWhereUniqueInputObjectSchema,
Yup.array().of(GameEventWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([GameEventWhereUniqueInputObjectSchema,
Yup.array().of(GameEventWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([GameEventWhereUniqueInputObjectSchema,
Yup.array().of(GameEventWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([GameEventUpdateWithWhereUniqueWithoutPlayerInputObjectSchema,
Yup.array().of(GameEventUpdateWithWhereUniqueWithoutPlayerInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([GameEventUpdateManyWithWhereWithoutPlayerInputObjectSchema,
Yup.array().of(GameEventUpdateManyWithWhereWithoutPlayerInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([GameEventScalarWhereInputObjectSchema,
Yup.array().of(GameEventScalarWhereInputObjectSchema)])
});
