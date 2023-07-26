import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';
import Layout from '../views/Layout';

describe('The Layout component', () => {
  test("renders the content of the 'My Profile' page correctly into the DOM", () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <Layout>
            <Header />
            ,
            <main>
              <section id="missions">
                <div className="container">
                  <div className="my-missions service">
                    <h2>My Missions</h2>
                  </div>
                </div>
              </section>
            </main>
          </Layout>
        </MemoryRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
