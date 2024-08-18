import Container from "./components/container";
import Header from "./components/header";
import Hero from "./components/sections/hero";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div>
          <Container>usp's</Container>
        </div>
        <div>
          <Container>3 col layout</Container>
        </div>
        <div>
          <Container>Carousal with Poster</Container>
        </div>
      </main>
    </>
  );
}
