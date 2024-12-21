import axios from "axios";

class LoginPageService {
  login() {
    return axios
      .get("http://localhost:5000/users") // Doğru endpointi kontrol edin
      .then((response) => response.data)
      .catch((error) => {
        throw new Error("Kullanıcı verileri alınamadı.");
      });
  }
}

export default new LoginPageService();
