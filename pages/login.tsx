import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface IForm {
  email: String;
}
export default function Login() {
  const { register, handleSubmit } = useForm<IForm>();
  const router = useRouter();
  const onValid = async (data: IForm) => {
    const json = await fetch("/api/users/confirm", {
      body: JSON.stringify(data),
      method: "POST",
    });
    if (json.status !== 200) {
      return alert("Login Error : Not found email...");
    }
    router.push("/");
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <label>Email:</label>
        <input {...register("email")} />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}
