// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InjuryCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { InjuryUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { InjuryCreateOrConnectWithoutPlayerInputObjectSchema } from '../internals';;
import { InjuryUpsertWithWhereUniqueWithoutPlayerInputObjectSchema } from '../internals';;
import { InjuryCreateManyPlayerInputEnvelopeObjectSchema } from '../internals';;
import { InjuryWhereUniqueInputObjectSchema } from '../internals';;
import { InjuryUpdateWithWhereUniqueWithoutPlayerInputObjectSchema } from '../internals';;
import { InjuryUpdateManyWithWhereWithoutPlayerInputObjectSchema } from '../internals';;
import { InjuryScalarWhereInputObjectSchema } from '../internals';

export const InjuryUpdateManyWithoutPlayerNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([InjuryCreateWithoutPlayerInputObjectSchema,
Yup.array().of(InjuryCreateWithoutPlayerInputObjectSchema),
InjuryUncheckedCreateWithoutPlayerInputObjectSchema,
Yup.array().of(InjuryUncheckedCreateWithoutPlayerInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([InjuryCreateOrConnectWithoutPlayerInputObjectSchema,
Yup.array().of(InjuryCreateOrConnectWithoutPlayerInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([InjuryUpsertWithWhereUniqueWithoutPlayerInputObjectSchema,
Yup.array().of(InjuryUpsertWithWhereUniqueWithoutPlayerInputObjectSchema)]),  createMany: InjuryCreateManyPlayerInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([InjuryWhereUniqueInputObjectSchema,
Yup.array().of(InjuryWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([InjuryWhereUniqueInputObjectSchema,
Yup.array().of(InjuryWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([InjuryWhereUniqueInputObjectSchema,
Yup.array().of(InjuryWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([InjuryWhereUniqueInputObjectSchema,
Yup.array().of(InjuryWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([InjuryUpdateWithWhereUniqueWithoutPlayerInputObjectSchema,
Yup.array().of(InjuryUpdateWithWhereUniqueWithoutPlayerInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([InjuryUpdateManyWithWhereWithoutPlayerInputObjectSchema,
Yup.array().of(InjuryUpdateManyWithWhereWithoutPlayerInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([InjuryScalarWhereInputObjectSchema,
Yup.array().of(InjuryScalarWhereInputObjectSchema)])
});
