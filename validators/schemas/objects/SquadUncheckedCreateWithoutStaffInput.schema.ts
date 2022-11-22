// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerUncheckedCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionUncheckedCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateNestedManyWithoutSquadInputObjectSchema } from '../internals';

export const SquadUncheckedCreateWithoutStaffInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  players: PlayerUncheckedCreateNestedManyWithoutSquadInputObjectSchema,  competition: CompetitionUncheckedCreateNestedManyWithoutSquadInputObjectSchema,  institutionId: Yup.string().required(),  homeColor: Yup.mixed().oneOfSchemas([Yup.string()]),  awayColor: Yup.mixed().oneOfSchemas([Yup.string()]),  Team: TeamUncheckedCreateNestedManyWithoutSquadInputObjectSchema,  locationId: Yup.mixed().oneOfSchemas([Yup.string()])
});
