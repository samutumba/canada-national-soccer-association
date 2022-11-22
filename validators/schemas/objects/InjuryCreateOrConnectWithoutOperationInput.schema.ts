// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InjuryWhereUniqueInputObjectSchema } from '../internals';;
import { InjuryCreateWithoutOperationInputObjectSchema } from '../internals';;
import { InjuryUncheckedCreateWithoutOperationInputObjectSchema } from '../internals';

export const InjuryCreateOrConnectWithoutOperationInputObjectSchema = Yup.object({
    where: InjuryWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([InjuryCreateWithoutOperationInputObjectSchema,
InjuryUncheckedCreateWithoutOperationInputObjectSchema])
});
