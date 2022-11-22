// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameCreateWithoutLocationInputObjectSchema } from '../internals';;
import { GameUncheckedCreateWithoutLocationInputObjectSchema } from '../internals';;
import { GameCreateOrConnectWithoutLocationInputObjectSchema } from '../internals';;
import { GameCreateManyLocationInputEnvelopeObjectSchema } from '../internals';;
import { GameWhereUniqueInputObjectSchema } from '../internals';

export const GameCreateNestedManyWithoutLocationInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([GameCreateWithoutLocationInputObjectSchema,
Yup.array().of(GameCreateWithoutLocationInputObjectSchema),
GameUncheckedCreateWithoutLocationInputObjectSchema,
Yup.array().of(GameUncheckedCreateWithoutLocationInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([GameCreateOrConnectWithoutLocationInputObjectSchema,
Yup.array().of(GameCreateOrConnectWithoutLocationInputObjectSchema)]),  createMany: GameCreateManyLocationInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([GameWhereUniqueInputObjectSchema,
Yup.array().of(GameWhereUniqueInputObjectSchema)])
});
