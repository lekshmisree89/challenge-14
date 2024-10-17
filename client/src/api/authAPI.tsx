import { UserLogin } from "../interfaces/UserLogin";


const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Handle successful login, e.g., store token, user data, etc.
    console.log("Login successful:", data);
    return data;

  
  } catch (error) {
    console.error("Login failed:", error);
    
    throw error; // Rethrow if you want to handle it further up the call stack
  }
};

export { login };
