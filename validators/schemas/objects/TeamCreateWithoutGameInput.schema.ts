// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateNestedManyWithoutTeamInputObjectSchema } from '../internals';;
import { SquadCreateNestedOneWithoutTeamInputObjectSchema } from '../internals';

export const TeamCreateWithoutGameInputObjectSchema = Yup.object({
    id: Yup.string(),  starters: PlayerCreateNestedManyWithoutTeamInputObjectSchema,  shirtColor: Yup.string().required(),  squad: SquadCreateNestedOneWithoutTeamInputObjectSchema
});
