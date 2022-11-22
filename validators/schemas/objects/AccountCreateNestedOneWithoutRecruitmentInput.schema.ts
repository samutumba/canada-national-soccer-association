// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AccountCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { AccountUncheckedCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { AccountCreateOrConnectWithoutRecruitmentInputObjectSchema } from '../internals';;
import { AccountWhereUniqueInputObjectSchema } from '../internals';

export const AccountCreateNestedOneWithoutRecruitmentInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([AccountCreateWithoutRecruitmentInputObjectSchema,
AccountUncheckedCreateWithoutRecruitmentInputObjectSchema]),  connectOrCreate: AccountCreateOrConnectWithoutRecruitmentInputObjectSchema,  connect: AccountWhereUniqueInputObjectSchema
});
