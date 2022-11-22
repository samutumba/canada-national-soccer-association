// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameEventCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { GameEventUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { GameEventCreateOrConnectWithoutPlayerInputObjectSchema } from '../internals';;
import { GameEventCreateManyPlayerInputEnvelopeObjectSchema } from '../internals';;
import { GameEventWhereUniqueInputObjectSchema } from '../internals';

export const GameEventUncheckedCreateNestedManyWithoutPlayerInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([GameEventCreateWithoutPlayerInputObjectSchema,
Yup.array().of(GameEventCreateWithoutPlayerInputObjectSchema),
GameEventUncheckedCreateWithoutPlayerInputObjectSchema,
Yup.array().of(GameEventUncheckedCreateWithoutPlayerInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([GameEventCreateOrConnectWithoutPlayerInputObjectSchema,
Yup.array().of(GameEventCreateOrConnectWithoutPlayerInputObjectSchema)]),  createMany: GameEventCreateManyPlayerInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([GameEventWhereUniqueInputObjectSchema,
Yup.array().of(GameEventWhereUniqueInputObjectSchema)])
});
