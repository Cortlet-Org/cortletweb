import { HeroSection } from "@/components/home/hero-section";
import { FeaturesGrid } from "@/components/home/features-grid";
import { WaitlistForm } from "@/components/home/waitlist-form";
// Main page
export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
        <HeroSection />
      <FeaturesGrid />
      <WaitlistForm />
    </main>
  );
}
