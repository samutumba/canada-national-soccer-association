// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameEventWhereUniqueInputObjectSchema } from '../internals';;
import { GameEventUpdateWithoutGameInputObjectSchema } from '../internals';;
import { GameEventUncheckedUpdateWithoutGameInputObjectSchema } from '../internals';;
import { GameEventCreateWithoutGameInputObjectSchema } from '../internals';;
import { GameEventUncheckedCreateWithoutGameInputObjectSchema } from '../internals';

export const GameEventUpsertWithWhereUniqueWithoutGameInputObjectSchema = Yup.object({
    where: GameEventWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([GameEventUpdateWithoutGameInputObjectSchema,
GameEventUncheckedUpdateWithoutGameInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([GameEventCreateWithoutGameInputObjectSchema,
GameEventUncheckedCreateWithoutGameInputObjectSchema])
});
