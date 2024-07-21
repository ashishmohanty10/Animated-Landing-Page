import Container from "./components/container";
import Header from "./components/header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div>
          <Container>Hero Compoenents</Container>
        </div>
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
      ;
    </>
  );
}
