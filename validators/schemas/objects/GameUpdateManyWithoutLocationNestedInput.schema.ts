// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameCreateWithoutLocationInputObjectSchema } from '../internals';;
import { GameUncheckedCreateWithoutLocationInputObjectSchema } from '../internals';;
import { GameCreateOrConnectWithoutLocationInputObjectSchema } from '../internals';;
import { GameUpsertWithWhereUniqueWithoutLocationInputObjectSchema } from '../internals';;
import { GameCreateManyLocationInputEnvelopeObjectSchema } from '../internals';;
import { GameWhereUniqueInputObjectSchema } from '../internals';;
import { GameUpdateWithWhereUniqueWithoutLocationInputObjectSchema } from '../internals';;
import { GameUpdateManyWithWhereWithoutLocationInputObjectSchema } from '../internals';;
import { GameScalarWhereInputObjectSchema } from '../internals';

export const GameUpdateManyWithoutLocationNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([GameCreateWithoutLocationInputObjectSchema,
Yup.array().of(GameCreateWithoutLocationInputObjectSchema),
GameUncheckedCreateWithoutLocationInputObjectSchema,
Yup.array().of(GameUncheckedCreateWithoutLocationInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([GameCreateOrConnectWithoutLocationInputObjectSchema,
Yup.array().of(GameCreateOrConnectWithoutLocationInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([GameUpsertWithWhereUniqueWithoutLocationInputObjectSchema,
Yup.array().of(GameUpsertWithWhereUniqueWithoutLocationInputObjectSchema)]),  createMany: GameCreateManyLocationInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([GameWhereUniqueInputObjectSchema,
Yup.array().of(GameWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([GameWhereUniqueInputObjectSchema,
Yup.array().of(GameWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([GameWhereUniqueInputObjectSchema,
Yup.array().of(GameWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([GameWhereUniqueInputObjectSchema,
Yup.array().of(GameWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([GameUpdateWithWhereUniqueWithoutLocationInputObjectSchema,
Yup.array().of(GameUpdateWithWhereUniqueWithoutLocationInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([GameUpdateManyWithWhereWithoutLocationInputObjectSchema,
Yup.array().of(GameUpdateManyWithWhereWithoutLocationInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([GameScalarWhereInputObjectSchema,
Yup.array().of(GameScalarWhereInputObjectSchema)])
});
