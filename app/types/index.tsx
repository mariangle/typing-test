import { User } from "@prisma/client"

export interface TestResult {
    id: string
    createdAt: Date
    wpm: number
    userId: string | null
    user: User
}