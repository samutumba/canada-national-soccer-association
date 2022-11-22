// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InjuryCreateWithoutOperationInputObjectSchema } from '../internals';;
import { InjuryUncheckedCreateWithoutOperationInputObjectSchema } from '../internals';;
import { InjuryCreateOrConnectWithoutOperationInputObjectSchema } from '../internals';;
import { InjuryWhereUniqueInputObjectSchema } from '../internals';

export const InjuryCreateNestedOneWithoutOperationInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([InjuryCreateWithoutOperationInputObjectSchema,
InjuryUncheckedCreateWithoutOperationInputObjectSchema]),  connectOrCreate: InjuryCreateOrConnectWithoutOperationInputObjectSchema,  connect: InjuryWhereUniqueInputObjectSchema
});
