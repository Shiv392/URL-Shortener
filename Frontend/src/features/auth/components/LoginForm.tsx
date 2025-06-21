import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('invalid email').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,'invalid email'),
  password: Yup.string().required('Password is required')
});

type Props = {
  submit: (formValues: { email: string; password: string }) => void;
  loading?: boolean;
  error?: string | null;
  success?: boolean;
  message?: string;
};

const LoginForm = ({ submit, loading, error, success, message }: Props) => {
  const navigate = useNavigate();
  const login_formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log('login form details ---------->', values);
      submit(values);
    },
    validateOnMount: true
  });

  return (
    <section>
      <div
        className="flex bg-white items-center justify-center px-4 py-5 sm:px-6 sm:py-10 lg:px-5 lg:py-5"
      >
        <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center"></div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign in to your account
          </h2>
          <form className="mt-8" onSubmit={login_formik.handleSubmit}>
            <div className="space-y-5">
              <div>
                <label className="text-base font-medium text-gray-900 flex item-center justify-start">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id='email'
                    name='email'
                    placeholder="Enter Email"
                    type="email"
                    value={login_formik.values.email}
                    onChange={login_formik.handleChange}
                    onBlur={login_formik.handleBlur}
                    className={`input-field ${
                     login_formik.touched.email && login_formik.errors.email ? 'input-error' : ''
                     }`}
                  />
                  {
                    login_formik.touched.email && login_formik.errors.email && (
                      <div className='text-red-500 text-sm mt-1'>{login_formik.errors.email}</div>
                    )
                  }
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-base font-medium text-gray-900">
                    Password
                  </label>
                  <a
                    className="text-sm font-semibold text-black hover:underline"
                    title=""
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    type="password"
                    onChange={login_formik.handleChange}
                    onBlur={login_formik.handleBlur}
                    value={login_formik.values.password}
                    className={`input-field ${
                     login_formik.touched.password && login_formik.errors.password ? 'input-error' : ''
                     }`}
                  />
                  {
                    login_formik.touched.password && login_formik.errors.password && (
                      <div className='text-red-400 text-sm mt-1'>{login_formik.errors.password}</div>
                    )
                  }
                </div>
              </div>
              <div>
                <button
                  className="inline-flex cursor-pointer w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7  hover:bg-black/80"
                  type="submit" disabled={!login_formik.isValid || loading}
                >
                  {loading ? 'Logged in...' : 'Get started'}
                </button>
              </div>
            </div>
            <div className="mt-3 space-y-3">
              <button
                className="relative cursor-pointer inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                type="button"
              >
                <span className="mr-2 inline-block">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-rose-500"
                  >
                    <path
                      d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                    ></path>
                  </svg>
                </span>
                Sign in with Google
              </button>
              {/* {error && <div className="text-red-500 mt-2">{error}</div>}
              {success && <div className="text-green-500 mt-2">{message}</div>} */}
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600 cursor-pointer hover:text-blue-800" onClick={() => navigate('/signup')}>
            Don't have an account? Create a free account
          </p>
        </div>
      </div>
    </section>

  )
}
export default LoginForm;