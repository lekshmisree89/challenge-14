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
      const errorData = await response.json(); // Parse error response as JSON
      throw new Error(`Error: ${errorData.message}`); // Throw a detailed error message    
    }


    const data = await response.json();

    // Handle successful login, e.g., store token, user data, etc.
    console.log("Login successful:", data);
    return data;

  
  } catch (err) {
    console.log('Error from user login: ', err);  // Log any errors that occur during fetch
    return Promise.reject('Could not fetch user info');  // Return a rejected promise with an error message
  }
};

export { login };
