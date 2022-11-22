// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateNestedManyWithoutGameInputObjectSchema } from '../internals';;
import { CompetitionCreateNestedOneWithoutGameInputObjectSchema } from '../internals';;
import { LocationCreateNestedOneWithoutGameInputObjectSchema } from '../internals';

export const GameCreateWithoutEventsInputObjectSchema = Yup.object({
    id: Yup.string(),  team: TeamCreateNestedManyWithoutGameInputObjectSchema,  competition: CompetitionCreateNestedOneWithoutGameInputObjectSchema,  updatedAt: Yup.date(),  location: LocationCreateNestedOneWithoutGameInputObjectSchema,  attendance: Yup.number().required()
});
