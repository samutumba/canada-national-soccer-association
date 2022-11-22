// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';;
import { InstitutionCreateNestedOneWithoutSquadInputObjectSchema } from '../internals';;
import { StaffCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';;
import { LocationCreateNestedOneWithoutSquadInputObjectSchema } from '../internals';

export const SquadCreateWithoutTeamInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  players: PlayerCreateNestedManyWithoutSquadInputObjectSchema,  institution: InstitutionCreateNestedOneWithoutSquadInputObjectSchema,  staff: StaffCreateNestedManyWithoutSquadInputObjectSchema,  competition: CompetitionCreateNestedManyWithoutSquadInputObjectSchema,  home: LocationCreateNestedOneWithoutSquadInputObjectSchema,  homeColor: Yup.mixed().oneOfSchemas([Yup.string()]),  awayColor: Yup.mixed().oneOfSchemas([Yup.string()])
});
