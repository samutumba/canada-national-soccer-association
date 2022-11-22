// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { PlayerUpdateManyWithoutSquadNestedInputObjectSchema } from '../internals';;
import { InstitutionUpdateOneRequiredWithoutSquadNestedInputObjectSchema } from '../internals';;
import { StaffUpdateManyWithoutSquadNestedInputObjectSchema } from '../internals';;
import { CompetitionUpdateManyWithoutSquadNestedInputObjectSchema } from '../internals';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { TeamUpdateManyWithoutSquadNestedInputObjectSchema } from '../internals';

export const SquadUpdateWithoutHomeInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  players: PlayerUpdateManyWithoutSquadNestedInputObjectSchema,  institution: InstitutionUpdateOneRequiredWithoutSquadNestedInputObjectSchema,  staff: StaffUpdateManyWithoutSquadNestedInputObjectSchema,  competition: CompetitionUpdateManyWithoutSquadNestedInputObjectSchema,  homeColor: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  awayColor: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  Team: TeamUpdateManyWithoutSquadNestedInputObjectSchema
});
