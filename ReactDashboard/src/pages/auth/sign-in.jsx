import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login_me } from "../../services";
import { useState, useEffect } from "react";

export function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setError({ ...error, email: "Email Field is Required" });
      return;
    }
    if (!formData.password) {
      setError({ ...error, password: "Password Field is required" });
      return;
    }

    const res = await login_me(formData);
    if (res.success) {
      Cookies.set("token", res?.finalData?.token);
      localStorage.setItem("user", JSON.stringify(res?.finalData?.user));
      navigate("/");
    } else {
      toast.error(res.message);
    }
  };

  useEffect(() => {
    if (Cookies.get("token")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-24 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              type="email"
              label="Email"
              size="lg"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {error.email && (
              <p className="text-sm text-red-500">{error.email}</p>
            )}
            <Input
              type="password"
              label="Password"
              size="lg"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {error.password && (
              <p className="text-sm text-red-500">{error.password}</p>
            )}

            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={handleSubmit}>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
