import * as Yup from 'yup';

export const RoleSchema = Yup.mixed().oneOf(["head_coach","doctor","therapist","recruiter","coach","nurse","kitman","referee","lawyer","teacher","other"])