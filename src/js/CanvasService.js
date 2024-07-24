const API_URL = 'unt.instructure.com'; // Replace with your Canvas instance URL
const API_EXT = '/api/v1'; // API extension

const canvasService = {
  getUserData: async (token) => {
    try {
      const response = await fetch(`https://${API_URL}${API_EXT}/users/self?access_token=${token}`, {
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user data from Canvas:', error);
      throw error;
    }
  },

  getCourses: async (token) => {
    try {
      const response = await fetch(`https://${API_URL}${API_EXT}/courses?access_token=${token}`, {
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching courses from Canvas:', error);
      throw error;
    }
  },

  getAssignments: async (token, courseId) => {
    try {
      const response = await fetch(`https://${API_URL}${API_EXT}/courses/${courseId}/assignments?access_token=${token}`, {
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching assignments from Canvas:', error);
      throw error;
    }
  }
};

export default canvasService;
