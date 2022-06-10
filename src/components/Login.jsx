import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const loginUser = async () => {};
  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div
        class='block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
      >
        <div className='max-w-md w-full space-y-8'>
          <div>
            <img
              className='mx-auto h-12 w-auto'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
              alt='Workflow'
            />
            <h4 className='mt-6 text-center text-3xl font-bold text-gray-900'>
              Sign in to your account
            </h4>
          </div>

          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Email in invalid')
                .max(255)
                .required('Email is required'),
              password: Yup.string().max(255).required('Password is required'),
            })}
            onSubmit={(values) => {
              loginUser(values);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
              values,
            }) => (
              <form
                onSubmit={handleSubmit}
                noValidate
                autoComplete='off'
                className='mt-8 space-y-6'
              >
                <div className='rounded-md shadow-sm -space-y-px'>
                  <div>
                    <label htmlFor='email-address' className='sr-only'>
                      Email address
                    </label>
                    <input
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      type='email'
                      name='email'
                      className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                      placeholder='E-mail Address'
                    />
                    {errors.email && touched.email && (
                      <div className='text-red-600 text-xs pt-2 pl-1'>
                        {errors.email}
                      </div>
                    )}
                  </div>{' '}
                  <br />
                  <div>
                    <label htmlFor='password' className='sr-only'>
                      Password
                    </label>

                    <input
                      error={Boolean(touched.password && errors.password)}
                      helperText={touched.password && errors.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                      type='password'
                      name='password'
                      placeholder='Password'
                      id='password'
                      autoComplete='current-password'
                      className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                    />
                  </div>
                  {errors.password && touched.password && (
                    <div className='text-red-600 text-xs pt-2 pl-1'>
                      {errors.password}
                    </div>
                  )}
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <input
                      id='remember-me'
                      name='remember-me'
                      type='checkbox'
                      className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                    />
                    <label
                      htmlFor='remember-me'
                      className='ml-2 block text-sm text-gray-900'
                    >
                      Remember me
                    </label>
                  </div>

                  <div className='text-sm'>
                    <a
                      className='font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer'
                      onClick={() => navigate('/forget/password')}
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type='button'
                    className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                      <LockClosedIcon
                        className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                        aria-hidden='true'
                      />
                    </span>
                    Sign in
                  </button>
                </div>

                <div className='text-sm text-center'>
                  <a
                    className='font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer'
                    onClick={() => navigate('/register')}
                  >
                    Don't have an account ?
                  </a>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
