// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { GameEventUpdateManyWithoutGameNestedInputObjectSchema } from '../internals';;
import { CompetitionUpdateOneRequiredWithoutGameNestedInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { LocationUpdateOneRequiredWithoutGameNestedInputObjectSchema } from '../internals';;
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';

export const GameUpdateWithoutTeamInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  events: GameEventUpdateManyWithoutGameNestedInputObjectSchema,  competition: CompetitionUpdateOneRequiredWithoutGameNestedInputObjectSchema,  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  location: LocationUpdateOneRequiredWithoutGameNestedInputObjectSchema,  attendance: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema])
});
