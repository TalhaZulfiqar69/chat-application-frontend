import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const registerUser = async () => {};

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
              Sign up to your account
            </h4>
          </div>
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Email in invalid')
                .max(255)
                .required('Email is required'),
              fullName: Yup.string().max(255).required('Name is required'),
              password: Yup.string().max(255).required('Password is required'),
              confirmPassword: Yup.string()
                .required('Confirm password is required')
                .oneOf(
                  [Yup.ref('password'), null],
                  'Password and confirm password not match'
                ),
            })}
            onSubmit={(values) => {
              registerUser(values);
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
                className='mt-8 space-y-6'
              >
                <div className='rounded-md shadow-sm -space-y-px'>
                  <div>
                    <label htmlFor='name' className='sr-only'>
                      Full Name
                    </label>
                    <input
                      error={Boolean(touched.fullName && errors.fullName)}
                      helperText={touched.fullName && errors.fullName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.fullName}
                      type='text'
                      name='fullName'
                      className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                      placeholder='Full name'
                    />
                    {errors.fullName && touched.fullName && (
                      <div className='text-red-600 text-xs pt-2 pl-1'>
                        {errors.fullName}
                      </div>
                    )}
                  </div>
                  <br />
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
                  </div>
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
                      className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                      placeholder='Password'
                    />
                    {errors.password && touched.password && (
                      <div className='text-red-600 text-xs pt-2 pl-1'>
                        {errors.password}
                      </div>
                    )}
                  </div>
                  <br />
                  <div>
                    <label htmlFor='confirm-password' className='sr-only'>
                      Confirm Password
                    </label>
                    <input
                      error={Boolean(
                        touched.confirmPassword && errors.confirmPassword
                      )}
                      helperText={
                        touched.confirmPassword && errors.confirmPassword
                      }
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.confirmPassword}
                      type='password'
                      name='confirmPassword'
                      className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                      placeholder='Confirm password'
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <div className='text-red-600 text-xs pt-2 pl-1'>
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                      <LockClosedIcon
                        className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                        aria-hidden='true'
                      />
                    </span>
                    Sign Up
                  </button>
                </div>

                <div className='text-sm text-center'>
                  <a
                    className='font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer'
                    onClick={() => navigate('/')}
                  >
                    Already have an account ?
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

export default Register;
