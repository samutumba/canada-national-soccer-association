// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameEventWhereUniqueInputObjectSchema } from '../internals';;
import { GameEventCreateWithoutGameInputObjectSchema } from '../internals';;
import { GameEventUncheckedCreateWithoutGameInputObjectSchema } from '../internals';

export const GameEventCreateOrConnectWithoutGameInputObjectSchema = Yup.object({
    where: GameEventWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([GameEventCreateWithoutGameInputObjectSchema,
GameEventUncheckedCreateWithoutGameInputObjectSchema])
});
