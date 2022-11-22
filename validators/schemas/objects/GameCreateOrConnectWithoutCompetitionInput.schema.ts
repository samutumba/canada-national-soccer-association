// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameWhereUniqueInputObjectSchema } from '../internals';;
import { GameCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { GameUncheckedCreateWithoutCompetitionInputObjectSchema } from '../internals';

export const GameCreateOrConnectWithoutCompetitionInputObjectSchema = Yup.object({
    where: GameWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([GameCreateWithoutCompetitionInputObjectSchema,
GameUncheckedCreateWithoutCompetitionInputObjectSchema])
});
