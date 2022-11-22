// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InjuryCreateWithoutOperationInputObjectSchema } from '../internals';;
import { InjuryUncheckedCreateWithoutOperationInputObjectSchema } from '../internals';;
import { InjuryCreateOrConnectWithoutOperationInputObjectSchema } from '../internals';;
import { InjuryUpsertWithoutOperationInputObjectSchema } from '../internals';;
import { InjuryWhereUniqueInputObjectSchema } from '../internals';;
import { InjuryUpdateWithoutOperationInputObjectSchema } from '../internals';;
import { InjuryUncheckedUpdateWithoutOperationInputObjectSchema } from '../internals';

export const InjuryUpdateOneRequiredWithoutOperationNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([InjuryCreateWithoutOperationInputObjectSchema,
InjuryUncheckedCreateWithoutOperationInputObjectSchema]),  connectOrCreate: InjuryCreateOrConnectWithoutOperationInputObjectSchema,  upsert: InjuryUpsertWithoutOperationInputObjectSchema,  connect: InjuryWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([InjuryUpdateWithoutOperationInputObjectSchema,
InjuryUncheckedUpdateWithoutOperationInputObjectSchema])
});
