// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerUncheckedCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';;
import { StaffUncheckedCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';

export const SquadUncheckedCreateWithoutCompetitionInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  players: PlayerUncheckedCreateNestedManyWithoutSquadInputObjectSchema,  staff: StaffUncheckedCreateNestedManyWithoutSquadInputObjectSchema,  institutionId: Yup.string().required(),  homeColor: Yup.mixed().oneOfSchemas([Yup.string()]),  awayColor: Yup.mixed().oneOfSchemas([Yup.string()]),  Team: TeamUncheckedCreateNestedManyWithoutSquadInputObjectSchema,  locationId: Yup.mixed().oneOfSchemas([Yup.string()])
});
