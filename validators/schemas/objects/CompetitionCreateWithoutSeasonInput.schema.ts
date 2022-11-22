// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateNestedManyWithoutCompetitionInputObjectSchema } from '../internals';;
import { GameCreateNestedManyWithoutCompetitionInputObjectSchema } from '../internals';

export const CompetitionCreateWithoutSeasonInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  sponsor: Yup.string().required(),  Squad: SquadCreateNestedManyWithoutCompetitionInputObjectSchema,  Game: GameCreateNestedManyWithoutCompetitionInputObjectSchema
});
