// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { BoolFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumPostionFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { HeathRecordUpdateOneWithoutPlayerNestedInputObjectSchema } from '../internals';;
import { ScholarshipUpdateManyWithoutPlayerNestedInputObjectSchema } from '../internals';;
import { RecruitmentUpdateManyWithoutPlayerNestedInputObjectSchema } from '../internals';;
import { GameEventUpdateManyWithoutPlayerNestedInputObjectSchema } from '../internals';;
import { InjuryUpdateManyWithoutPlayerNestedInputObjectSchema } from '../internals';;
import { SquadUpdateManyWithoutPlayersNestedInputObjectSchema } from '../internals';

export const PlayerUpdateWithoutTeamInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  dob: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  isDomestic: Yup.mixed().oneOfSchemas([Yup.boolean(),
BoolFieldUpdateOperationsInputObjectSchema]),  photo: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  gender: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  position: Yup.mixed().oneOfSchemas([EnumPostionFieldUpdateOperationsInputObjectSchema]),  healthRecord: HeathRecordUpdateOneWithoutPlayerNestedInputObjectSchema,  phone: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  streetAddress: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  city: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  province: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  country: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  postalCode: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  scholarship: ScholarshipUpdateManyWithoutPlayerNestedInputObjectSchema,  recruitment: RecruitmentUpdateManyWithoutPlayerNestedInputObjectSchema,  GameEvent: GameEventUpdateManyWithoutPlayerNestedInputObjectSchema,  Injury: InjuryUpdateManyWithoutPlayerNestedInputObjectSchema,  Squad: SquadUpdateManyWithoutPlayersNestedInputObjectSchema
});
