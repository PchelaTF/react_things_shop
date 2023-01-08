import React, {ReactNode} from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid'
import MainContainer from "../components/MainContainer";
import {SubmitHandler, useForm} from "react-hook-form";
import {parseSetCookieString} from "next/dist/server/web/spec-extension/cookies/serialize";

class IFormInputs {
    email!: string
    password!: string
}

const LoginScreen = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInputs>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        console.log(data)
    }

    return (
        <MainContainer title={'Login'}>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">

                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                register account if you don`t have
                            </a>
                        </p>
                    </div>

                    <form className="mt-8 space-y-6"  onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    // name="email"
                                    type="email"
                                    autoComplete="email"
                                    // required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                    {...register('email', {required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                                            message: 'Please enter valid email'
                                        }})}
                                />
                                {errors.email && (<p className={'text-red-500 text-xs italic'}>{errors.email.message}</p>)}
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    // name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    // required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {value: 5, message: 'Password mast be at least 5 characters'}
                                    })}
                                />
                                {errors.password && (<p className={'text-red-500 text-xs italic'}>{errors.password.message}</p>)}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </MainContainer>
    );
};

export default LoginScreen;