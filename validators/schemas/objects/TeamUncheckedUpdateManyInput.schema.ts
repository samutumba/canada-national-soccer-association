// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumFormationFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';

export const TeamUncheckedUpdateManyInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  formation: Yup.mixed().oneOfSchemas([EnumFormationFieldUpdateOperationsInputObjectSchema]),  shirtColor: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  squadId: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  gameId: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema])
});
