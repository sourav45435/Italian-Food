/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { BrickFeatureSection } from './components/BrickFeatureSection.tsx';
import { ChefSection } from './components/ChefSection.tsx';
import { CulinaryMosaicSection } from './components/CulinaryMosaicSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { WineAndBarSection } from './components/WineAndBarSection.tsx';
import { MenuSection } from './components/MenuSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { EventsSection } from './components/EventsSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ReservationModal } from './components/ReservationModal.tsx';
import { DeliveryModal } from './components/DeliveryModal.tsx';
import { StoryModal } from './components/StoryModal.tsx';
import { GalleryLightbox } from './components/GalleryLightbox.tsx';

import { LanguageProvider } from './context/LanguageContext.tsx';

function AppContent() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [deliveryOpen, setDeliveryOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(0);

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contact-section');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f6f0] text-stone-900 font-sans antialiased overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar
        onOpenReservation={() => setReservationOpen(true)}
        onOpenDelivery={() => setDeliveryOpen(true)}
        onOpenContact={handleScrollToContact}
      />

      <main>
        {/* Hero Banner with "TASTY ITALIAN FOOD" */}
        <Hero onOpenReservation={() => setReservationOpen(true)} />

        {/* About Us Section */}
        <AboutSection onOpenStory={() => setStoryOpen(true)} />

        {/* Brick Wall Section with Fine Dining & Delivery Cards */}
        <BrickFeatureSection
          onOpenReservation={() => setReservationOpen(true)}
          onOpenDelivery={() => setDeliveryOpen(true)}
        />

        {/* NEW: Il Maestro & Wood-Fired Hearth Craft Section */}
        <ChefSection onOpenReservation={() => setReservationOpen(true)} />

        {/* NEW: Signature Culinary Showcase Mosaic with 8 High-Res Dishes */}
        <CulinaryMosaicSection onOpenDelivery={() => setDeliveryOpen(true)} />

        {/* Our Gallery Section (Expanded to 8 Slides) */}
        <GallerySection onOpenLightbox={handleOpenLightbox} />

        {/* NEW: Historic Wine Cellar & Cinema Cocktail Lounge */}
        <WineAndBarSection onOpenReservation={() => setReservationOpen(true)} />

        {/* Our Menu Section with Black Blackboard & Torn Paper Transition */}
        <MenuSection onSelectItem={() => setDeliveryOpen(true)} />

        {/* NEW: Guest & Food Critic Testimonials and Dining Atmosphere */}
        <TestimonialsSection />

        {/* NEW: Private Cinema Screenings, Banquets & Celebrations */}
        <EventsSection onOpenReservation={() => setReservationOpen(true)} />
      </main>

      {/* Footer with Location, Hours, and Contact Form */}
      <Footer />

      {/* Interactive Modals */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      <DeliveryModal
        isOpen={deliveryOpen}
        onClose={() => setDeliveryOpen(false)}
      />

      <StoryModal
        isOpen={storyOpen}
        onClose={() => setStoryOpen(false)}
        onOpenReservation={() => setReservationOpen(true)}
      />

      <GalleryLightbox
        isOpen={lightboxOpen}
        initialIndex={activeLightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
