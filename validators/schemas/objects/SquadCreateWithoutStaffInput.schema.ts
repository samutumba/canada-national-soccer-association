// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';;
import { InstitutionCreateNestedOneWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';;
import { LocationCreateNestedOneWithoutSquadInputObjectSchema } from '../internals';;
import { TeamCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';

export const SquadCreateWithoutStaffInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  players: PlayerCreateNestedManyWithoutSquadInputObjectSchema,  institution: InstitutionCreateNestedOneWithoutSquadInputObjectSchema,  competition: CompetitionCreateNestedManyWithoutSquadInputObjectSchema,  home: LocationCreateNestedOneWithoutSquadInputObjectSchema,  homeColor: Yup.mixed().oneOfSchemas([Yup.string()]),  awayColor: Yup.mixed().oneOfSchemas([Yup.string()]),  Team: TeamCreateNestedManyWithoutSquadInputObjectSchema
});
