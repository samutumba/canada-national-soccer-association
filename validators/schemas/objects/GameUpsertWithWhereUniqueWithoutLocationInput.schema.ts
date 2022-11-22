// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameWhereUniqueInputObjectSchema } from '../internals';;
import { GameUpdateWithoutLocationInputObjectSchema } from '../internals';;
import { GameUncheckedUpdateWithoutLocationInputObjectSchema } from '../internals';;
import { GameCreateWithoutLocationInputObjectSchema } from '../internals';;
import { GameUncheckedCreateWithoutLocationInputObjectSchema } from '../internals';

export const GameUpsertWithWhereUniqueWithoutLocationInputObjectSchema = Yup.object({
    where: GameWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([GameUpdateWithoutLocationInputObjectSchema,
GameUncheckedUpdateWithoutLocationInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([GameCreateWithoutLocationInputObjectSchema,
GameUncheckedCreateWithoutLocationInputObjectSchema])
});
