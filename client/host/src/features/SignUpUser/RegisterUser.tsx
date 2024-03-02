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
  repeatPassword: string;
};

const schema = Joi.object({
  username: Joi.string().alphanum().required(),
  password: Joi.string().alphanum().required(),
  repeatPassword: Joi.any().valid(Joi.ref('password')).required().messages({
    'any.only': 'Password must match',
  }),
});

const SignUpUser = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: joiResolver(schema),
    defaultValues: {
      username: '',
      password: '',
      repeatPassword: '',
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
        <Label htmlFor="repeatPassword">Repeat password</Label>
        <Controller
          control={control}
          name="repeatPassword"
          rules={{
            required: true,
          }}
          render={({ field }) => <Input {...field} />}
        />
        {errors.repeatPassword?.message && (
          <FormErrorMessage message={errors.repeatPassword.message} />
        )}
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default SignUpUser;
