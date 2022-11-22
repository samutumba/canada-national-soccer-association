// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { PlayerUpdateManyWithoutSquadNestedInputObjectSchema } from '../internals';;
import { StaffUpdateManyWithoutSquadNestedInputObjectSchema } from '../internals';;
import { CompetitionUpdateManyWithoutSquadNestedInputObjectSchema } from '../internals';;
import { LocationUpdateOneWithoutSquadNestedInputObjectSchema } from '../internals';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { TeamUpdateManyWithoutSquadNestedInputObjectSchema } from '../internals';

export const SquadUpdateWithoutInstitutionInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  players: PlayerUpdateManyWithoutSquadNestedInputObjectSchema,  staff: StaffUpdateManyWithoutSquadNestedInputObjectSchema,  competition: CompetitionUpdateManyWithoutSquadNestedInputObjectSchema,  home: LocationUpdateOneWithoutSquadNestedInputObjectSchema,  homeColor: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  awayColor: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  Team: TeamUpdateManyWithoutSquadNestedInputObjectSchema
});
