// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema } from '../internals';

export const CompetitionUncheckedCreateWithoutSquadInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  sponsor: Yup.string().required(),  seasonId: Yup.string().required(),  Game: GameUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema
});
