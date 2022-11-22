// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InjuryCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { InjuryUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { InjuryCreateOrConnectWithoutPlayerInputObjectSchema } from '../internals';;
import { InjuryCreateManyPlayerInputEnvelopeObjectSchema } from '../internals';;
import { InjuryWhereUniqueInputObjectSchema } from '../internals';

export const InjuryCreateNestedManyWithoutPlayerInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([InjuryCreateWithoutPlayerInputObjectSchema,
Yup.array().of(InjuryCreateWithoutPlayerInputObjectSchema),
InjuryUncheckedCreateWithoutPlayerInputObjectSchema,
Yup.array().of(InjuryUncheckedCreateWithoutPlayerInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([InjuryCreateOrConnectWithoutPlayerInputObjectSchema,
Yup.array().of(InjuryCreateOrConnectWithoutPlayerInputObjectSchema)]),  createMany: InjuryCreateManyPlayerInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([InjuryWhereUniqueInputObjectSchema,
Yup.array().of(InjuryWhereUniqueInputObjectSchema)])
});
