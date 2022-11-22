// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameEventWhereUniqueInputObjectSchema } from '../internals';;
import { GameEventCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { GameEventUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';

export const GameEventCreateOrConnectWithoutPlayerInputObjectSchema = Yup.object({
    where: GameEventWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([GameEventCreateWithoutPlayerInputObjectSchema,
GameEventUncheckedCreateWithoutPlayerInputObjectSchema])
});
