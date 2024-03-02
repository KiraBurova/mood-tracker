import Input from 'remoteApp/Input';
import Button from 'remoteApp/Button';
import Label from 'remoteApp/Label';
import FormErrorMessage from 'remoteApp/FormErrorMessage';
import Joi from 'joi';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

type Inputs = {
  username: string;
  password: string;
};

const schema = Joi.object({
  username: Joi.string().alphanum().required(),
  password: Joi.string().alphanum().required(),
});

const SignInUser = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: joiResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center flex-col gap-2 w-3/6"
      >
        <Label htmlFor="username">Username</Label>
        <Controller
          control={control}
          name="username"
          rules={{ required: true }}
          render={({ field }) => <Input {...field} />}
        />
        {errors.username?.message && (
          <FormErrorMessage message={errors.username.message} />
        )}
        <Label htmlFor="password">Password</Label>
        <Controller
          control={control}
          name="password"
          rules={{ required: true }}
          render={({ field }) => <Input {...field} />}
        />
        {errors.password?.message && (
          <FormErrorMessage message={errors.password.message} />
        )}
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default SignInUser;
