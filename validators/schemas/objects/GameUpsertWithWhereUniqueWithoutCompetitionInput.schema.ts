// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameWhereUniqueInputObjectSchema } from '../internals';;
import { GameUpdateWithoutCompetitionInputObjectSchema } from '../internals';;
import { GameUncheckedUpdateWithoutCompetitionInputObjectSchema } from '../internals';;
import { GameCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { GameUncheckedCreateWithoutCompetitionInputObjectSchema } from '../internals';

export const GameUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema = Yup.object({
    where: GameWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([GameUpdateWithoutCompetitionInputObjectSchema,
GameUncheckedUpdateWithoutCompetitionInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([GameCreateWithoutCompetitionInputObjectSchema,
GameUncheckedCreateWithoutCompetitionInputObjectSchema])
});
