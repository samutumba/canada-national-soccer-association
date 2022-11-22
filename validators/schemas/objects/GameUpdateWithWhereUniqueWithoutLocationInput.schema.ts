// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameWhereUniqueInputObjectSchema } from '../internals';;
import { GameUpdateWithoutLocationInputObjectSchema } from '../internals';;
import { GameUncheckedUpdateWithoutLocationInputObjectSchema } from '../internals';

export const GameUpdateWithWhereUniqueWithoutLocationInputObjectSchema = Yup.object({
    where: GameWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([GameUpdateWithoutLocationInputObjectSchema,
GameUncheckedUpdateWithoutLocationInputObjectSchema])
});
