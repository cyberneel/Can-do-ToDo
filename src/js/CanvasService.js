import axios from 'axios';

const API_URL = 'https://unt.instructure.com/api/v1'; // this url depends on campus

const canvasService = {
  getTasks: async (token) => {
    try {
      const response = await axios.get(`${API_URL}/courses`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const courses = response.data;

      const tasks = [];
      for (const course of courses) {
        const assignments = await axios.get(`${API_URL}/courses/${course.id}/assignments`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        tasks.push(...assignments.data);
      }

      return tasks;
    } catch (error) {
      console.error('Error fetching tasks from Canvas:', error);
      throw error;
    }
  }
};

export default canvasService;
