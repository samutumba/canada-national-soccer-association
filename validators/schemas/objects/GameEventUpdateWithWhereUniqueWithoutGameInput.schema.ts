// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameEventWhereUniqueInputObjectSchema } from '../internals';;
import { GameEventUpdateWithoutGameInputObjectSchema } from '../internals';;
import { GameEventUncheckedUpdateWithoutGameInputObjectSchema } from '../internals';

export const GameEventUpdateWithWhereUniqueWithoutGameInputObjectSchema = Yup.object({
    where: GameEventWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([GameEventUpdateWithoutGameInputObjectSchema,
GameEventUncheckedUpdateWithoutGameInputObjectSchema])
});
