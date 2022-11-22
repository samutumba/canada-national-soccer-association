// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SeasonCreateNestedOneWithoutCompetitionInputObjectSchema } from '../internals';;
import { SquadCreateNestedManyWithoutCompetitionInputObjectSchema } from '../internals';

export const CompetitionCreateWithoutGameInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  sponsor: Yup.string().required(),  season: SeasonCreateNestedOneWithoutCompetitionInputObjectSchema,  Squad: SquadCreateNestedManyWithoutCompetitionInputObjectSchema
});
