// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameWhereUniqueInputObjectSchema } from '../internals';;
import { GameUpdateWithoutCompetitionInputObjectSchema } from '../internals';;
import { GameUncheckedUpdateWithoutCompetitionInputObjectSchema } from '../internals';

export const GameUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema = Yup.object({
    where: GameWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([GameUpdateWithoutCompetitionInputObjectSchema,
GameUncheckedUpdateWithoutCompetitionInputObjectSchema])
});
