import { GOOGLE_URL } from '../../common/constants';
import { getErrorMessage, reportError } from '../../common/helper';
const API_KEY = process.env.REACT_APP_API_KEY as string;

class HtttpService {
  static async searchBooksRequest(str: string, startIndex = 0, maxResults = 10) {
    try {
      if (str) {
        const response = await fetch(
          `${GOOGLE_URL}volumes?q=${str}&key=${API_KEY}&startIndex=${startIndex}&maxResults=${maxResults}`,
          { method: 'GET' }
        );
        return await response.json();
      }
    } catch (error) {
      reportError({ message: getErrorMessage(error) });
    }
  }
}

export default HtttpService;
