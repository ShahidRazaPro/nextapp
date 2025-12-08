import About from '../static/About';

export default async function Page({ params }) {
  
  
  const { page } = await params;

  const PAGES = {
    about: <About />,
  };

  return PAGES[page] || <h1>404 – Page Not Found</h1>;
}
