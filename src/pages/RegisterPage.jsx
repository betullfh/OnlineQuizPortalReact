import { Grid2, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { FaLock, FaUserCircle } from "react-icons/fa";
import "../css/LoginPage.css";
import Button from "../components/Button";

function RegisterPage() {
  return (
    <div className="register-login">
      <div className="main">
        <h3 className="login-register-title">MindSpark</h3>
        <form className="register-form">
           
          <div className="input-form">
          <h3 className="login-title">Kayıt Ol</h3>
            <div className="inputs">
              <Grid2 container spacing={2}>
                <TextField
                  id="username"
                  placeholder="Kullanıcı adı"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaUserCircle
                          style={{ color: "gray", fontSize: "18px" }}
                        />{" "}
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
                  type="password"
                  placeholder="Şifre"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaLock style={{ color: "gray", fontSize: "18px" }} />{" "}
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
              </Grid2>
            </div>

            <div className="actions">
              <div className="form-button">
                <Button color="primary" size="medium">
                  Kaydol
                </Button>
                <Button color="gray" size="medium">
                  Temizle
                </Button>
              </div>
            </div>
            <div className="login-choice">
              <p className="login-p">Zaten bir hesabın var mı? Giriş Yap.</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
