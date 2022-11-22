import * as Yup from 'yup';

export const GameEventScalarFieldEnumSchema = Yup.mixed().oneOf(["id","minute","gameId","playerId","type"])