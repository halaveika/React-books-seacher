import { GOOGLE_URL } from '../../common/constants';
import { getErrorMessage, reportError } from '../../common/helper';
import { PAGE_SIZE_ARR, FILTER_ARR } from '../../common/constants';
const API_KEY = process.env.REACT_APP_API_KEY as string;

class HtttpService {
  static async searchBooksRequest(
    str: string,
    startIndex = 0,
    maxResults = PAGE_SIZE_ARR[0],
    printType = FILTER_ARR[0]
  ) {
    try {
      if (str) {
        console.log('str = ' + str + 'startIndex = ' + startIndex + 'maxResults = ' + maxResults);
        const response = await fetch(
          `${GOOGLE_URL}volumes?q=${str}&key=${API_KEY}&startIndex=${startIndex}&maxResults=${maxResults}&printType=${printType}`,
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
