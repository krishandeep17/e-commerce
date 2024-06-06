import heroImg from "../assets/heros/recover-password-hero.svg";
import AuthLayout from "../features/authentication/AuthLayout";
import RecoverPasswordForm from "../features/authentication/RecoverPasswordForm";

export default function RecoverPassword() {
  return (
    <AuthLayout
      heroImg={heroImg}
      heading="Forgot Password"
      subHeading="Enter your registered email address. We'll send you a code to reset your password."
      type="recover-password"
      style={{
        "@media (max-height: 550px)": {
          mt: 10,
        },
      }}
    >
      <RecoverPasswordForm />
    </AuthLayout>
  );
}
