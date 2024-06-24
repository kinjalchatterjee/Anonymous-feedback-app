import {resend} from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { use } from "react";
import { Over_the_Rainbow } from "next/font/google";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try{
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Anon feedback | Verification code',
            react: VerificationEmail({username, otp: verifyCode}),
        });
        return {success: true, message:'Verification email sent successfully'}

    }
    catch (emailError) {
        console.error("Error sending verification email", emailError)
        return {success: false, message:'Failed to send verification email'}

    }
}