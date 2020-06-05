import IndexPage from './index-page';
import ErrorPage from './error-page';

export default class App {
  constructor() {
    if (window.location.pathname === '/') {
      this.page = new IndexPage();
    } else {
      this.page = new ErrorPage();
    }
  }
}
