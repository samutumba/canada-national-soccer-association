// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadCreateWithoutHomeInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutHomeInputObjectSchema } from '../internals';

export const SquadCreateOrConnectWithoutHomeInputObjectSchema = Yup.object({
    where: SquadWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([SquadCreateWithoutHomeInputObjectSchema,
SquadUncheckedCreateWithoutHomeInputObjectSchema])
});
