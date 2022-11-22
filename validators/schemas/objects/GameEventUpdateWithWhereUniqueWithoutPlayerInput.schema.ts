// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameEventWhereUniqueInputObjectSchema } from '../internals';;
import { GameEventUpdateWithoutPlayerInputObjectSchema } from '../internals';;
import { GameEventUncheckedUpdateWithoutPlayerInputObjectSchema } from '../internals';

export const GameEventUpdateWithWhereUniqueWithoutPlayerInputObjectSchema = Yup.object({
    where: GameEventWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([GameEventUpdateWithoutPlayerInputObjectSchema,
GameEventUncheckedUpdateWithoutPlayerInputObjectSchema])
});
