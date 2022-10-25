import { request } from '../util/request';

// The start of what could turn into a nice little library of Wikipedia Pageview API Calls
const API_PAGE_VIEW_ROOT_URL =
  'https://wikimedia.org/api/rest_v1/metrics/pageviews';

export function getMostViewedPagesByCountryAndDate(
  date,
  country,
  numberOfResults
) {
  const url = `${API_PAGE_VIEW_ROOT_URL}/top-per-country/${country}/all-access/${date}`;

  return request('GET', url).then((res) => {
    return res.articles.slice(0, numberOfResults);
  });
}
