// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateManyWithoutSquadNestedInputObjectSchema } from '../internals';;
import { StaffUncheckedUpdateManyWithoutSquadNestedInputObjectSchema } from '../internals';;
import { CompetitionUncheckedUpdateManyWithoutSquadNestedInputObjectSchema } from '../internals';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateManyWithoutSquadNestedInputObjectSchema } from '../internals';

export const SquadUncheckedUpdateWithoutInstitutionInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  players: PlayerUncheckedUpdateManyWithoutSquadNestedInputObjectSchema,  staff: StaffUncheckedUpdateManyWithoutSquadNestedInputObjectSchema,  competition: CompetitionUncheckedUpdateManyWithoutSquadNestedInputObjectSchema,  homeColor: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  awayColor: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  Team: TeamUncheckedUpdateManyWithoutSquadNestedInputObjectSchema,  locationId: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema])
});
