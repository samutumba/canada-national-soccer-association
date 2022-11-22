// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerUncheckedCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';;
import { StaffUncheckedCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionUncheckedCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';

export const SquadUncheckedCreateWithoutTeamInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  players: PlayerUncheckedCreateNestedManyWithoutSquadInputObjectSchema,  staff: StaffUncheckedCreateNestedManyWithoutSquadInputObjectSchema,  competition: CompetitionUncheckedCreateNestedManyWithoutSquadInputObjectSchema,  institutionId: Yup.string().required(),  homeColor: Yup.mixed().oneOfSchemas([Yup.string()]),  awayColor: Yup.mixed().oneOfSchemas([Yup.string()]),  locationId: Yup.mixed().oneOfSchemas([Yup.string()])
});
