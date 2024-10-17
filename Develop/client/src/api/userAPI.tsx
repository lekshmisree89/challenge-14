import Auth from '../utils/auth';
import { UserData } from '../interfaces/UserData'


const retrieveUsers = async (): Promise<UserData[]> => {
  try {
    const response = await fetch('api/users', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken() || ''}`, // Ensure a fallback for the token
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Invalid user API response: ${errorData.message || 'Unknown error'}`);
    }

    const data: UserData[] = await response.json(); // Assuming the API returns an array of users
    return data;

  } catch (err) { 
    console.error('Error from data retrieval:', err);
    throw err; // Propagate error for higher-level handling
  }
}

export { retrieveUsers };
