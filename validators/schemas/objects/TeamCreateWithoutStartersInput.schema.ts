// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateNestedOneWithoutTeamInputObjectSchema } from '../internals';;
import { GameCreateNestedOneWithoutTeamInputObjectSchema } from '../internals';

export const TeamCreateWithoutStartersInputObjectSchema = Yup.object({
    id: Yup.string(),  shirtColor: Yup.string().required(),  squad: SquadCreateNestedOneWithoutTeamInputObjectSchema,  Game: GameCreateNestedOneWithoutTeamInputObjectSchema
});
