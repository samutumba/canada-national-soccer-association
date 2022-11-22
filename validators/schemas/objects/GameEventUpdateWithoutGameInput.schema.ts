// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { PlayerUpdateOneRequiredWithoutGameEventNestedInputObjectSchema } from '../internals';;
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumEventFieldUpdateOperationsInputObjectSchema } from '../internals';

export const GameEventUpdateWithoutGameInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  player: PlayerUpdateOneRequiredWithoutGameEventNestedInputObjectSchema,  minute: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  type: Yup.mixed().oneOfSchemas([EnumEventFieldUpdateOperationsInputObjectSchema])
});
