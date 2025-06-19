import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').max(10, 'Name can’t be more than 10 characters'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

const SignupForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      // You can handle submit logic here
    },
    validateOnMount:true
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 min-w-150 max-w-300">
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </p>

            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
              <input
                placeholder="Enter Name"
                autoComplete="off"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                type="text"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
              <input
                placeholder="Enter Email"
                autoComplete="off"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                type="email"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input
                placeholder="Enter Password"
                autoComplete="off"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                type="password"
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
              <input
                placeholder="Confirm Password"
                autoComplete="off"
                id="confirmPassword"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                type="password"
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
              )}
            </div>

            <button
              disabled={!formik.isValid}
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create an account
            </button>
          </div>
          <p
            className="mb-3 text-center text-sm text-gray-600 cursor-pointer hover:text-blue-800"
            onClick={() => navigate('/')}
          >
            Already have an account? Login
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
