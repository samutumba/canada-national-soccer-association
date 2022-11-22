// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InstitutionCreateNestedOneWithoutSquadInputObjectSchema } from '../internals';;
import { StaffCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';;
import { LocationCreateNestedOneWithoutSquadInputObjectSchema } from '../internals';;
import { TeamCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';

export const SquadCreateWithoutPlayersInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  institution: InstitutionCreateNestedOneWithoutSquadInputObjectSchema,  staff: StaffCreateNestedManyWithoutSquadInputObjectSchema,  competition: CompetitionCreateNestedManyWithoutSquadInputObjectSchema,  home: LocationCreateNestedOneWithoutSquadInputObjectSchema,  homeColor: Yup.mixed().oneOfSchemas([Yup.string()]),  awayColor: Yup.mixed().oneOfSchemas([Yup.string()]),  Team: TeamCreateNestedManyWithoutSquadInputObjectSchema
});
