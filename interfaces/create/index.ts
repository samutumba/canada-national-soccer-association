// AUTO GENERATED FILE BY @kalissaac/prisma-typegen
// DO NOT EDIT


export enum Formation {
    F4_4_2 = 'F4_4_2',
    F4_2_3_1 = 'F4_2_3_1',
    F3_5_2 = 'F3_5_2',
    F5_3_2 = 'F5_3_2',
    F3_4_3 = 'F3_4_3',
    F4_3_3 = 'F4_3_3',
}

export enum Role {
    head_coach = 'head_coach',
    doctor = 'doctor',
    therapist = 'therapist',
    recruiter = 'recruiter',
    coach = 'coach',
    nurse = 'nurse',
    kitman = 'kitman',
    referee = 'referee',
    lawyer = 'lawyer',
    teacher = 'teacher',
    other = 'other',
}

export enum InstitutionCategory {
    high_school = 'high_school',
    middle_school = 'middle_school',
    college = 'college',
    university = 'university',
    semi_pro = 'semi_pro',
    amateur = 'amateur',
    pro = 'pro',
}

export enum LocationCategory {
    field = 'field',
    stadium = 'stadium',
    park = 'park',
    other = 'other',
}

export enum CompetitionType {
    TOURNAMENT = 'TOURNAMENT',
    LEAGUE = 'LEAGUE',
    FRIENDLY = 'FRIENDLY',
}

export enum Event {
    goal = 'goal',
    assist = 'assist',
    yellow_card = 'yellow_card',
    red_card = 'red_card',
    substitution_off = 'substitution_off',
    substitution_on = 'substitution_on',
}

export enum Stage {
    First = 'First',
    Second = 'Second',
    Third = 'Third',
}

export enum Postion {
    goal_keeper = 'goal_keeper',
    right_back = 'right_back',
    center_back = 'center_back',
    left_back = 'left_back',
    defensive_midfielder = 'defensive_midfielder',
    central_midfielder = 'central_midfielder',
    attacking_midfielder = 'attacking_midfielder',
    winger = 'winger',
    striker = 'striker',
    wing_back = 'wing_back',
}


export interface Player {
    id?: string,
    name: string,
    dob: (Date | string),
    isDomestic?: boolean,
    photo?: string | null,
    gender: string,
    position: Postion,
    heathRecordId?: string | null,
    phone: string,
    streetAddress: string,
    city: string,
    province?: string,
    country?: string,
    postalCode: string,
}

export interface Team {
    id?: string,
    formation: Formation,
    shirtColor: string,
    squadId: string,
    gameId?: string | null,
}

export interface Staff {
    id?: string,
    name: string,
    dob: (Date | string),
    phone: string,
    role: Role,
    streetAddress: string,
    city: string,
    country?: string,
    postalCode: string,
    accountId?: string | null,
}

export interface Institution {
    id?: string,
    name: string,
    address: string,
    city: string,
    province?: string,
    postal_code: string,
    category: InstitutionCategory,
}

export interface Location {
    id?: string,
    name: string,
    category: LocationCategory,
    streetAddress: string,
    city: string,
    province?: string,
    country?: string,
    postalCode: string,
}

export interface Squad {
    id?: string,
    name: string,
    institutionId: string,
    homeColor?: string | null,
    awayColor?: string | null,
    locationId?: string | null,
}

export interface Competition {
    id?: string,
    name: string,
    sponsor: string,
    type?: CompetitionType,
    seasonId: string,
}

export interface Season {
    id?: string,
    startDate?: (Date | string),
    endDate: (Date | string),
}

export interface HeathRecord {
    id?: string,
    cardNumber: string,
    issueDate: (Date | string),
    expiryDate: (Date | string),
}

export interface Game {
    id?: string,
    updatedAt: (Date | string),
    attendance: number,
    locationId: string,
    competitionId: string,
}

export interface GameEvent {
    id?: string,
    minute: number,
    gameId?: string | null,
    playerId: string,
    type: Event,
}

export interface Scholarship {
    id?: string,
    name: string,
    description: string,
    institutionId: string,
    playerId: string,
    createdAt?: (Date | string),
    updatedAt: (Date | string),
}

export interface Account {
    id?: string,
    username: string,
    password: string,
    updatedAt: (Date | string),
    createdAt?: (Date | string),
}

export interface Recruitment {
    id?: string,
    createdAt?: (Date | string),
    updatedAt: (Date | string),
    passed?: boolean,
    resume?: string | null,
    playerId: string,
    accountId: string,
}

export interface Interview {
    id?: string,
    stage?: Stage,
    passed?: boolean,
    at: (Date | string),
    comment: string,
    recruitmentId: string,
    createdAt?: (Date | string),
    updatedAt: (Date | string),
}

export interface Injury {
    id?: string,
    playerId: string,
    createdAt?: (Date | string),
    updatedAt: (Date | string),
}

export interface Operation {
    id?: string,
    type: string,
    date?: (Date | string),
    injuryId: string,
    createdAt?: (Date | string),
    updatedAt: (Date | string),
}
