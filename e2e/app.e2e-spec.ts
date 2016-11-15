import { PrimerProyectPage } from './app.po';

describe('primer-proyect App', function() {
  let page: PrimerProyectPage;

  beforeEach(() => {
    page = new PrimerProyectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
