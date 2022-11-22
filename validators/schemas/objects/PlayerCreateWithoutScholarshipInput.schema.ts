// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { HeathRecordCreateNestedOneWithoutPlayerInputObjectSchema } from '../internals';;
import { RecruitmentCreateNestedManyWithoutPlayerInputObjectSchema } from '../internals';;
import { GameEventCreateNestedManyWithoutPlayerInputObjectSchema } from '../internals';;
import { InjuryCreateNestedManyWithoutPlayerInputObjectSchema } from '../internals';;
import { SquadCreateNestedManyWithoutPlayersInputObjectSchema } from '../internals';;
import { TeamCreateNestedManyWithoutStartersInputObjectSchema } from '../internals';

export const PlayerCreateWithoutScholarshipInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  dob: Yup.date().required(),  isDomestic: Yup.boolean(),  photo: Yup.mixed().oneOfSchemas([Yup.string()]),  gender: Yup.string().required(),  healthRecord: HeathRecordCreateNestedOneWithoutPlayerInputObjectSchema,  phone: Yup.string().required(),  streetAddress: Yup.string().required(),  city: Yup.string().required(),  province: Yup.string(),  country: Yup.string(),  postalCode: Yup.string().required(),  recruitment: RecruitmentCreateNestedManyWithoutPlayerInputObjectSchema,  GameEvent: GameEventCreateNestedManyWithoutPlayerInputObjectSchema,  Injury: InjuryCreateNestedManyWithoutPlayerInputObjectSchema,  Squad: SquadCreateNestedManyWithoutPlayersInputObjectSchema,  Team: TeamCreateNestedManyWithoutStartersInputObjectSchema
});
