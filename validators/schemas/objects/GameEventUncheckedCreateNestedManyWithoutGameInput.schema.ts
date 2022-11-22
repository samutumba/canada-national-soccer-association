// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameEventCreateWithoutGameInputObjectSchema } from '../internals';;
import { GameEventUncheckedCreateWithoutGameInputObjectSchema } from '../internals';;
import { GameEventCreateOrConnectWithoutGameInputObjectSchema } from '../internals';;
import { GameEventCreateManyGameInputEnvelopeObjectSchema } from '../internals';;
import { GameEventWhereUniqueInputObjectSchema } from '../internals';

export const GameEventUncheckedCreateNestedManyWithoutGameInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([GameEventCreateWithoutGameInputObjectSchema,
Yup.array().of(GameEventCreateWithoutGameInputObjectSchema),
GameEventUncheckedCreateWithoutGameInputObjectSchema,
Yup.array().of(GameEventUncheckedCreateWithoutGameInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([GameEventCreateOrConnectWithoutGameInputObjectSchema,
Yup.array().of(GameEventCreateOrConnectWithoutGameInputObjectSchema)]),  createMany: GameEventCreateManyGameInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([GameEventWhereUniqueInputObjectSchema,
Yup.array().of(GameEventWhereUniqueInputObjectSchema)])
});
