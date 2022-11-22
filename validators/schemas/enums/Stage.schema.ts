import * as Yup from 'yup';

export const StageSchema = Yup.mixed().oneOf(["First","Second","Third"])