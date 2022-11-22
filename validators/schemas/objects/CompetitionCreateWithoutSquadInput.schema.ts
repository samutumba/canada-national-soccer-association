// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SeasonCreateNestedOneWithoutCompetitionInputObjectSchema } from '../internals';;
import { GameCreateNestedManyWithoutCompetitionInputObjectSchema } from '../internals';

export const CompetitionCreateWithoutSquadInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  sponsor: Yup.string().required(),  season: SeasonCreateNestedOneWithoutCompetitionInputObjectSchema,  Game: GameCreateNestedManyWithoutCompetitionInputObjectSchema
});
