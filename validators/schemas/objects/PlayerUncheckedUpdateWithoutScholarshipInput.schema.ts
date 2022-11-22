// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { BoolFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumPostionFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { RecruitmentUncheckedUpdateManyWithoutPlayerNestedInputObjectSchema } from '../internals';;
import { GameEventUncheckedUpdateManyWithoutPlayerNestedInputObjectSchema } from '../internals';;
import { InjuryUncheckedUpdateManyWithoutPlayerNestedInputObjectSchema } from '../internals';;
import { SquadUncheckedUpdateManyWithoutPlayersNestedInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateManyWithoutStartersNestedInputObjectSchema } from '../internals';

export const PlayerUncheckedUpdateWithoutScholarshipInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  dob: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  isDomestic: Yup.mixed().oneOfSchemas([Yup.boolean(),
BoolFieldUpdateOperationsInputObjectSchema]),  photo: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  gender: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  position: Yup.mixed().oneOfSchemas([EnumPostionFieldUpdateOperationsInputObjectSchema]),  heathRecordId: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  phone: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  streetAddress: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  city: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  province: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  country: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  postalCode: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  recruitment: RecruitmentUncheckedUpdateManyWithoutPlayerNestedInputObjectSchema,  GameEvent: GameEventUncheckedUpdateManyWithoutPlayerNestedInputObjectSchema,  Injury: InjuryUncheckedUpdateManyWithoutPlayerNestedInputObjectSchema,  Squad: SquadUncheckedUpdateManyWithoutPlayersNestedInputObjectSchema,  Team: TeamUncheckedUpdateManyWithoutStartersNestedInputObjectSchema
});
