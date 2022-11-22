// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InjuryWhereUniqueInputObjectSchema } from '../internals';;
import { InjuryCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { InjuryUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';

export const InjuryCreateOrConnectWithoutPlayerInputObjectSchema = Yup.object({
    where: InjuryWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([InjuryCreateWithoutPlayerInputObjectSchema,
InjuryUncheckedCreateWithoutPlayerInputObjectSchema])
});
