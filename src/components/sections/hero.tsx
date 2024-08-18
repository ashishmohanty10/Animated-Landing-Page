import { Button } from "../button";
import Container from "../container";

export default function Hero() {
  return (
    <div className="relative bg-background h-[300vh] text-white">
      <div className="absolute top-0 left-0 w-full">
        <img src="/napoleon.webp" alt="" />
      </div>
      <Container className="relative z-10 min-h-[--hero-height] flex flex-col justify-end">
        <h1 className="text-5xl font-bold">
          All Apple Originals.
          <br /> Only on Apple TV+.
        </h1>
        <Button size="medium">Large button</Button>
        <p className="font-semibold">Watch on the 📺 app.</p>
      </Container>
    </div>
  );
}
