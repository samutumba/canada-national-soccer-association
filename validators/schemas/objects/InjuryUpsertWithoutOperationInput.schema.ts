// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InjuryUpdateWithoutOperationInputObjectSchema } from '../internals';;
import { InjuryUncheckedUpdateWithoutOperationInputObjectSchema } from '../internals';;
import { InjuryCreateWithoutOperationInputObjectSchema } from '../internals';;
import { InjuryUncheckedCreateWithoutOperationInputObjectSchema } from '../internals';

export const InjuryUpsertWithoutOperationInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([InjuryUpdateWithoutOperationInputObjectSchema,
InjuryUncheckedUpdateWithoutOperationInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([InjuryCreateWithoutOperationInputObjectSchema,
InjuryUncheckedCreateWithoutOperationInputObjectSchema])
});
