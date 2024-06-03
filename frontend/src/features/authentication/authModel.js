import { z } from "zod";

const email = z
  .string()
  .trim()
  .toLowerCase()
  .min(1, { message: "Email is required" })
  .email({ message: "Invalid email address" });

const password = z
  .string()
  .trim()
  .min(1, { message: "Password is required" })
  .min(8, { message: "Password must contain at least 8 characters" });

export const LoginSchema = z.object({ email, password });

export const CreateAccountSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(1, { message: "First name is required" })
      .min(3, { message: "First name must contain at least 3 characters" })
      .max(30, { message: "First name must contain at most 30 characters" }),
    lastName: z
      .string()
      .trim()
      .min(1, { message: "Last name is required" })
      .max(30, { message: "Last name must contain at most 30 characters" }),
    email,
    password,
    passwordConfirm: z
      .string()
      .trim()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

export const RecoverPasswordSchema = z.object({ email });
