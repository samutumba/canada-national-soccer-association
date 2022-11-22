// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameEventCreateWithoutGameInputObjectSchema } from '../internals';;
import { GameEventUncheckedCreateWithoutGameInputObjectSchema } from '../internals';;
import { GameEventCreateOrConnectWithoutGameInputObjectSchema } from '../internals';;
import { GameEventUpsertWithWhereUniqueWithoutGameInputObjectSchema } from '../internals';;
import { GameEventCreateManyGameInputEnvelopeObjectSchema } from '../internals';;
import { GameEventWhereUniqueInputObjectSchema } from '../internals';;
import { GameEventUpdateWithWhereUniqueWithoutGameInputObjectSchema } from '../internals';;
import { GameEventUpdateManyWithWhereWithoutGameInputObjectSchema } from '../internals';;
import { GameEventScalarWhereInputObjectSchema } from '../internals';

export const GameEventUpdateManyWithoutGameNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([GameEventCreateWithoutGameInputObjectSchema,
Yup.array().of(GameEventCreateWithoutGameInputObjectSchema),
GameEventUncheckedCreateWithoutGameInputObjectSchema,
Yup.array().of(GameEventUncheckedCreateWithoutGameInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([GameEventCreateOrConnectWithoutGameInputObjectSchema,
Yup.array().of(GameEventCreateOrConnectWithoutGameInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([GameEventUpsertWithWhereUniqueWithoutGameInputObjectSchema,
Yup.array().of(GameEventUpsertWithWhereUniqueWithoutGameInputObjectSchema)]),  createMany: GameEventCreateManyGameInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([GameEventWhereUniqueInputObjectSchema,
Yup.array().of(GameEventWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([GameEventWhereUniqueInputObjectSchema,
Yup.array().of(GameEventWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([GameEventWhereUniqueInputObjectSchema,
Yup.array().of(GameEventWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([GameEventWhereUniqueInputObjectSchema,
Yup.array().of(GameEventWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([GameEventUpdateWithWhereUniqueWithoutGameInputObjectSchema,
Yup.array().of(GameEventUpdateWithWhereUniqueWithoutGameInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([GameEventUpdateManyWithWhereWithoutGameInputObjectSchema,
Yup.array().of(GameEventUpdateManyWithWhereWithoutGameInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([GameEventScalarWhereInputObjectSchema,
Yup.array().of(GameEventScalarWhereInputObjectSchema)])
});
