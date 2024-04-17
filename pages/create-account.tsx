import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useUser from "../lib/client/useUser";

interface IForm {
  email: String;
  name: String;
}

export default function CreateAccount() {
  const user = useUser();
  const { register, handleSubmit } = useForm<IForm>();
  const router = useRouter();
  const onValid = async (data: IForm) => {
    const json = await (
      await fetch("/api/users/enter", {
        body: JSON.stringify(data),
        method: "POST",
      })
    ).json();
    if (json.ok === true) {
      alert("Account created! Please log in!");
      router.push("/login");
    }
  };
  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <label>Name:</label>
        <input {...register("name")} />
        <br />
        <label>Email:</label>
        <input {...register("email")} />
        <br />
        <button>Create Account</button>
      </form>
    </div>
  );
}
