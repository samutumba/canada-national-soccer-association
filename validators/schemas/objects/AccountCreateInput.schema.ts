// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentCreateNestedManyWithoutRecruiterInputObjectSchema } from '../internals';;
import { StaffCreateNestedManyWithoutAccountInputObjectSchema } from '../internals';

export const AccountCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  username: Yup.string().required(),  password: Yup.string().required(),  updatedAt: Yup.date(),  createdAt: Yup.date(),  recruitment: RecruitmentCreateNestedManyWithoutRecruiterInputObjectSchema,  Staff: StaffCreateNestedManyWithoutAccountInputObjectSchema
});
