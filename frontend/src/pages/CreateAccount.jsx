import heroImg from "../assets/heros/create-account.svg";
import AuthLayout from "../features/authentication/AuthLayout";
import CreateAccountForm from "../features/authentication/CreateAccountForm";

export default function CreateAccount() {
  return (
    <AuthLayout
      heroImg={heroImg}
      heading="Create Account"
      subHeading="Please enter details"
    >
      <CreateAccountForm />
    </AuthLayout>
  );
}
