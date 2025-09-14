import { lazy, Suspense } from "react";
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import LazySection from "./components/LazySection";

const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const LogoShowcase = lazy(() => import("./sections/LogoShowcase"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Experience = lazy(() => import("./sections/Experience"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
  </div>
);

const SectionPlaceholder = () => (
  <div className="h-32 flex justify-center items-center">
    <div className="w-16 h-1 bg-gray-700 rounded"></div>
  </div>
);

const App = () => (
  <>
    <Navbar />
    <Hero />
    <LazySection fallback={<SectionPlaceholder />}>
      <Suspense fallback={<LoadingSpinner />}>
        <ShowcaseSection />
      </Suspense>
    </LazySection>
    <LazySection fallback={<SectionPlaceholder />}>
      <Suspense fallback={<LoadingSpinner />}>
        <LogoShowcase />
      </Suspense>
    </LazySection>
    <LazySection fallback={<SectionPlaceholder />}>
      <Suspense fallback={<LoadingSpinner />}>
        <FeatureCards />
      </Suspense>
    </LazySection>
    <LazySection fallback={<SectionPlaceholder />}>
      <Suspense fallback={<LoadingSpinner />}>
        <Experience />
      </Suspense>
    </LazySection>
    <LazySection fallback={<SectionPlaceholder />}>
      <Suspense fallback={<LoadingSpinner />}>
        <TechStack />
      </Suspense>
    </LazySection>
    <LazySection fallback={<SectionPlaceholder />}>
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>
    </LazySection>
    <LazySection fallback={<SectionPlaceholder />}>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    </LazySection>
    <LazySection fallback={<SectionPlaceholder />}>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </LazySection>
  </>
);

export default App;
