import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Grid2, InputAdornment, TextField } from "@mui/material";
import { FaLock, FaUserCircle } from "react-icons/fa";
import "../css/LoginPage.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function RegisterPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: values.role,
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Kullanıcı adı zorunludur."),
      email: Yup.string()
        .email("Geçerli bir e-posta girin.")
        .required("E-posta zorunludur."),
      password: Yup.string()
        .min(6, "Şifre en az 6 karakter olmalıdır.")
        .required("Şifre zorunludur."),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Şifreler eşleşmiyor.")
        .required("Şifre tekrarı zorunludur."),
        role: Yup.string().required("Rol seçimi zorunludur."),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post("http://localhost:5000/users", {
          username: values.username,
          email: values.email,
          password: values.password,
          role: values.role,
        });
        toast.success("Kayıt Başarılı.")
        resetForm();
        navigate("/login");
      } catch (error) {
        toast.error("Hata Oluştu. "+error.message)
      }
    },
  });

  return (
    <div className="register-login">
      <div className="main">
        <h3 className="login-register-title">MindSpark</h3>
        <form className="register-form" onSubmit={formik.handleSubmit}>
          <div className="input-form">
            <h3 className="login-title">Kayıt Ol</h3>
            <div className="inputs-reg" style={{ gap: "0px" }}>
              <Grid2 container spacing={1}>
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
                        <FaUserCircle
                          style={{ color: "gray", fontSize: "18px" }}
                        />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                  }}
                  sx={{
                    marginBottom: "20px",
                    borderRadius: "10px",
                    backgroundColor: "#dce6eb",
                    "& .MuiFilledInput-root": {
                      borderRadius: "10px",
                      padding: "0px 15px",
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
                  id="email"
                  name="email"
                  placeholder="Mail"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaUserCircle
                          style={{ color: "gray", fontSize: "18px" }}
                        />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                  }}
                  sx={{
                    marginBottom: "20px",
                    borderRadius: "10px",
                    backgroundColor: "#dce6eb",
                    "& .MuiFilledInput-root": {
                      borderRadius: "10px",
                      padding: "0px 15px",
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
                    marginBottom: "20px",
                    borderRadius: "10px",
                    backgroundColor: "#dce6eb",
                    "& .MuiFilledInput-root": {
                      borderRadius: "10px",
                      padding: "0px 15px",
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
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Şifre Tekrar"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaLock style={{ color: "gray", fontSize: "18px" }} />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                  }}
                  sx={{
                    marginBottom: "20px",
                    borderRadius: "10px",
                    backgroundColor: "#dce6eb",
                    "& .MuiFilledInput-root": {
                      borderRadius: "10px",
                      padding: "0px 15px",
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
                <div className="role-selection">
                  <label
                    htmlFor="role"
                    style={{
                      marginBottom: "12px",
                      fontSize: "16px",
                      marginTop: "10px",
                    }}
                  ></label>
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
                    <option style={{ backgroundColor: "#dce6eb" }} value="user">
                      Kullanıcı girişi
                    </option>
                    <option value="instructor">Eğitmen girişi</option>
                    <option value="admin">Admin girişi</option>
                  </select>
                </div>
              </Grid2>
            </div>

            <div className="actions">
              <div className="form-button">
                <Button type="submit" color="primary" size="medium">
                  Kaydol
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
                onClick={() => navigate("/login")}
                className="login-p"
              >
                Zaten bir hesabın var mı? Giriş Yap.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
