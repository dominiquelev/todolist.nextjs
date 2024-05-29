import { comparePassword } from "@/lib/bcrypt"
import prisma from "@/prisma"
import { User } from "@prisma/client"

export const loginService = async (body: Pick<User, 'email' | 'password'>) => {
    try {

        const { email, password } = body
        const user = await prisma.user.findFirst({
            where: { email }
        })
        if (!user) {
            throw new Error("invalid email address")
        }
        const isPasswordValid = comparePassword(password, user.password)
        if (!isPasswordValid) {
            throw new Error("incorrect password")
        }
        return (
            {
                message: "login success",
                data: user
            }
        )

    } catch (error) {
        throw error
    }
}