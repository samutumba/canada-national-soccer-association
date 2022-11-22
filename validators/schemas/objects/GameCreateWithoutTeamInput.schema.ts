// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameEventCreateNestedManyWithoutGameInputObjectSchema } from '../internals';;
import { CompetitionCreateNestedOneWithoutGameInputObjectSchema } from '../internals';;
import { LocationCreateNestedOneWithoutGameInputObjectSchema } from '../internals';

export const GameCreateWithoutTeamInputObjectSchema = Yup.object({
    id: Yup.string(),  events: GameEventCreateNestedManyWithoutGameInputObjectSchema,  competition: CompetitionCreateNestedOneWithoutGameInputObjectSchema,  updatedAt: Yup.date(),  location: LocationCreateNestedOneWithoutGameInputObjectSchema,  attendance: Yup.number().required()
});
