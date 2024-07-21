import { Button } from "./button";
import Container from "./container";
import AppleLogo from "/appleLogo.svg";

export default function Header() {
  return (
    <>
      <header className="bg-backgroundContrast  text-white  ">
        <Container className="flex items-center min-h-11">
          <a href="/" className="flex items-center p-6 -ml-6">
            <span className="sr-only">Back to homepage</span>
            <img src={AppleLogo} alt="Apple Logo" width={14} height={14} />
          </a>
        </Container>
      </header>

      <div className="sticky top-0 bg-backgroundContrast  text-white  ">
        <Container className="flex items-center min-h-11 justify-between">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Stream Now</Button>
        </Container>
      </div>
    </>
  );
}
