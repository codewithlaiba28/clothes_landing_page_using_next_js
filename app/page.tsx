import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { BrandStory } from "@/components/BrandStory";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ValueProposition />
      <FeaturedCollections />
      <BrandStory />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
