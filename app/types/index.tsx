export interface TestResult {
    id: string
    createdAt: Date
    wpm: number
    userId: string | null
    user: User
}

export interface User {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    hashedPassword: string | null
    createdAt: Date
    updatedAt: Date
}