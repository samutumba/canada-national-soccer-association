// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { PlayerUncheckedUpdateManyWithoutTeamNestedInputObjectSchema } from '../internals';;
import { EnumFormationFieldUpdateOperationsInputObjectSchema } from '../internals';

export const TeamUncheckedUpdateWithoutGameInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  starters: PlayerUncheckedUpdateManyWithoutTeamNestedInputObjectSchema,  formation: Yup.mixed().oneOfSchemas([EnumFormationFieldUpdateOperationsInputObjectSchema]),  shirtColor: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  squadId: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema])
});
