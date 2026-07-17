import { Button } from "@/components/ui/button";

export function HeroActions() {
  return (
    <div className="mt-12 flex flex-col gap-4 sm:flex-row">

      <Button href="/products">
        Explore Products
      </Button>

      <Button
        href="/about"
        variant="glass"
      >
        About EON AI
      </Button>

    </div>
  );
}