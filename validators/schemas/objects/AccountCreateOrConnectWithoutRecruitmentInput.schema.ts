// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AccountWhereUniqueInputObjectSchema } from '../internals';;
import { AccountCreateWithoutRecruitmentInputObjectSchema } from '../internals';;
import { AccountUncheckedCreateWithoutRecruitmentInputObjectSchema } from '../internals';

export const AccountCreateOrConnectWithoutRecruitmentInputObjectSchema = Yup.object({
    where: AccountWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([AccountCreateWithoutRecruitmentInputObjectSchema,
AccountUncheckedCreateWithoutRecruitmentInputObjectSchema])
});
