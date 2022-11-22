// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ScholarshipUncheckedCreateNestedManyWithoutPlayerInputObjectSchema } from '../internals';;
import { GameEventUncheckedCreateNestedManyWithoutPlayerInputObjectSchema } from '../internals';;
import { InjuryUncheckedCreateNestedManyWithoutPlayerInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateNestedManyWithoutPlayersInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateNestedManyWithoutStartersInputObjectSchema } from '../internals';

export const PlayerUncheckedCreateWithoutRecruitmentInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  dob: Yup.date().required(),  isDomestic: Yup.boolean(),  photo: Yup.mixed().oneOfSchemas([Yup.string()]),  gender: Yup.string().required(),  heathRecordId: Yup.mixed().oneOfSchemas([Yup.string()]),  phone: Yup.string().required(),  streetAddress: Yup.string().required(),  city: Yup.string().required(),  province: Yup.string(),  country: Yup.string(),  postalCode: Yup.string().required(),  scholarship: ScholarshipUncheckedCreateNestedManyWithoutPlayerInputObjectSchema,  GameEvent: GameEventUncheckedCreateNestedManyWithoutPlayerInputObjectSchema,  Injury: InjuryUncheckedCreateNestedManyWithoutPlayerInputObjectSchema,  Squad: SquadUncheckedCreateNestedManyWithoutPlayersInputObjectSchema,  Team: TeamUncheckedCreateNestedManyWithoutStartersInputObjectSchema
});
