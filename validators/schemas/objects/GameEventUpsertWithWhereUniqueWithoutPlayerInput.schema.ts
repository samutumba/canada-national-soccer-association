// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameEventWhereUniqueInputObjectSchema } from '../internals';;
import { GameEventUpdateWithoutPlayerInputObjectSchema } from '../internals';;
import { GameEventUncheckedUpdateWithoutPlayerInputObjectSchema } from '../internals';;
import { GameEventCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { GameEventUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';

export const GameEventUpsertWithWhereUniqueWithoutPlayerInputObjectSchema = Yup.object({
    where: GameEventWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([GameEventUpdateWithoutPlayerInputObjectSchema,
GameEventUncheckedUpdateWithoutPlayerInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([GameEventCreateWithoutPlayerInputObjectSchema,
GameEventUncheckedCreateWithoutPlayerInputObjectSchema])
});
