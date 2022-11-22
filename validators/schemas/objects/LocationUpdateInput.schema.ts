// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumLocationCategoryFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { GameUpdateManyWithoutLocationNestedInputObjectSchema } from '../internals';;
import { SquadUpdateManyWithoutHomeNestedInputObjectSchema } from '../internals';

export const LocationUpdateInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  category: Yup.mixed().oneOfSchemas([EnumLocationCategoryFieldUpdateOperationsInputObjectSchema]),  streetAddress: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  city: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  province: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  country: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  postalCode: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  game: GameUpdateManyWithoutLocationNestedInputObjectSchema,  Squad: SquadUpdateManyWithoutHomeNestedInputObjectSchema
});
