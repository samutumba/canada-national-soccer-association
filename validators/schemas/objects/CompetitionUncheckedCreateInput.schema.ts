// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema } from '../internals';;
import { GameUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema } from '../internals';

export const CompetitionUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  sponsor: Yup.string().required(),  seasonId: Yup.string().required(),  Squad: SquadUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema,  Game: GameUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema
});
