// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { TeamUpdateManyWithoutGameNestedInputObjectSchema } from '../internals';;
import { CompetitionUpdateOneRequiredWithoutGameNestedInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { LocationUpdateOneRequiredWithoutGameNestedInputObjectSchema } from '../internals';;
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';

export const GameUpdateWithoutEventsInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  team: TeamUpdateManyWithoutGameNestedInputObjectSchema,  competition: CompetitionUpdateOneRequiredWithoutGameNestedInputObjectSchema,  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  location: LocationUpdateOneRequiredWithoutGameNestedInputObjectSchema,  attendance: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema])
});
