import { Grid as Grid2, InputAdornment, TextField } from "@mui/material";
import { FaLock, FaUserCircle } from "react-icons/fa";
import "../css/LoginPage.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import loginPageService from "../services/LoginPageService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Kullanıcı adı zorunludur."),
      password: Yup.string().required("Şifre zorunludur."),
    }),
    onSubmit: async (values) => {
      try {
        const users = await loginPageService.login();
        const user = users.find(
          (u) =>
            u.username === values.username &&
            u.password === values.password &&
            u.role === role
        );

        if (user) {
          toast.success("Giriş başarılı!");
          navigate("/")
        } else {
          toast.error("Kullanıcı adı, şifre veya rol hatalı.");
        }
      } catch (error) {
        toast.error(`Hata: ${error.message}`);
      }
    },
  });

  return (
    <div className="register-login">
      <ToastContainer /> {/* Toast için gerekli */}
      <div className="main">
        <h3 className="login-register-title">MindSpark</h3>
        <form className="register-form" onSubmit={formik.handleSubmit}>
          <div className="input-form">
            <h3 className="login-title">Giriş Yap</h3>
            <div className="inputs">
              <Grid2 container spacing={2}>
                <TextField
                  id="username"
                  name="username"
                  placeholder="Ad"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.username && Boolean(formik.errors.username)}
                  helperText={formik.touched.username && formik.errors.username}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaUserCircle style={{ color: "gray", fontSize: "18px" }} />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                  }}
                  sx={{
                    marginBottom: "10px",
                    borderRadius: "10px",
                    backgroundColor: "#dce6eb",
                    "& .MuiFilledInput-root": {
                      borderRadius: "10px",
                      padding: "0px 10px",
                      color: "black",
                    },
                    "& .MuiInputBase-root": {
                      border: "1px solid #ccc",
                    },
                    "&::placeholder": {
                      color: "black",
                    },
                  }}
                  variant="filled"
                  color="primary"
                />
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Şifre"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaLock style={{ color: "gray", fontSize: "18px" }} />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                  }}
                  sx={{
                    marginBottom: "10px",
                    borderRadius: "10px",
                    backgroundColor: "#dce6eb",
                    "& .MuiFilledInput-root": {
                      borderRadius: "10px",
                      padding: "0px 10px",
                      color: "black",
                    },
                    "& .MuiInputBase-root": {
                      border: "1px solid #ccc",
                    },
                    "&::placeholder": {
                      color: "black",
                    },
                  }}
                  variant="filled"
                  color="primary"
                />
              </Grid2>
            </div>
            <div className="role-selection">
              <label
                htmlFor="role"
                style={{
                  marginBottom: "12px",
                  fontSize: "16px",
                  marginTop: "10px",
                }}
              >
                Rol Seçimi
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "10px",
                  marginBottom: "20px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  backgroundColor: "#dce6eb",
                }}
              >
                <option value="user">Kullanıcı girişi</option>
                <option value="instructor">Eğitmen girişi</option>
                <option value="admin">Admin girişi</option>
              </select>
            </div>
            <div className="actions">
              <div className="form-button">
                <Button type="submit" color="primary" size="medium">
                  Giriş Yap
                </Button>
                <Button
                  color="gray"
                  size="medium"
                  onClick={() => formik.resetForm()}
                >
                  Temizle
                </Button>
              </div>
            </div>
            <div className="login-choice">
              <p
                onClick={() => navigate("/signup")}
                className="login-p"
              >
                Hesabınız Yok mu? Kaydolun.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
