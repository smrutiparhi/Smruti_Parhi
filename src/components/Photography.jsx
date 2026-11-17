import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiCamera } from 'react-icons/fi';
import './Photography.css';

const photoAsset = (fileName) => `${import.meta.env.BASE_URL}photography/${fileName}`;

const photoSlides = [
  {
    id: 'photo-01',
    src: photoAsset('photo-01.jpg'),
    alt: 'India Gate photographed in warm evening light',
    label: 'Frame 01',
    title: 'Monumental light',
    objectPosition: '50% 55%',
    palette: ['#322659', '#9176d8', '#f4b982', '#121427'],
  },
  {
    id: 'photo-02',
    src: photoAsset('photo-02.jpg'),
    alt: 'A bartender performing with fire in a warmly lit bar',
    label: 'Frame 02',
    title: 'Crafted in flame',
    objectPosition: '63% 50%',
    palette: ['#1b3957', '#4d8eb5', '#f3c9a1', '#101b2b'],
  },
  {
    id: 'photo-03',
    src: photoAsset('photo-03.jpg'),
    alt: 'A copper cocktail cup garnished with mint and dried citrus',
    label: 'Frame 03',
    title: 'A quiet detail',
    objectPosition: '50% 54%',
    palette: ['#231948', '#694bb1', '#d5a7ee', '#090916'],
  },
  {
    id: 'photo-04',
    src: photoAsset('photo-04.jpg'),
    alt: 'An acrobat balancing beneath illuminated cubes',
    label: 'Frame 04',
    title: 'Balance in motion',
    objectPosition: '50% 58%',
    palette: ['#271a30', '#81445e', '#e59a78', '#100b18'],
  },
  {
    id: 'photo-05',
    src: photoAsset('photo-05.jpg'),
    alt: 'Warm woven lights above a quiet restaurant table',
    label: 'Frame 05',
    title: 'Warm corners',
    objectPosition: '48% 50%',
    palette: ['#173a42', '#3b8888', '#b9d7c9', '#071718'],
  },
  {
    id: 'photo-06',
    src: photoAsset('photo-06.jpg'),
    alt: 'A long-exposure portrait of a bartender working with fire',
    label: 'Frame 06',
    title: 'Night in motion',
    objectPosition: '67% 50%',
    palette: ['#32170f', '#9c4521', '#ffd166', '#090504'],
  },
  {
    id: 'photo-07',
    src: photoAsset('photo-07.jpg'),
    alt: 'Two figures silhouetted against shimmering golden water',
    label: 'Frame 07',
    title: 'Golden hour',
    objectPosition: '50% 62%',
    palette: ['#4c241b', '#b87842', '#ffe0a2', '#1d100d'],
  },
  {
    id: 'photo-08',
    src: photoAsset('photo-08.jpg'),
    alt: 'A live performer beneath geometric circus lighting',
    label: 'Frame 08',
    title: 'Under the big top',
    objectPosition: '50% 65%',
    palette: ['#1f1239', '#7732a8', '#f0a6ff', '#090612'],
  },
  {
    id: 'photo-09',
    src: photoAsset('photo-09.jpg'),
    alt: 'A fabric performer moving beneath blue and magenta stage lights',
    label: 'Frame 09',
    title: 'A flash of movement',
    objectPosition: '43% 60%',
    palette: ['#10115b', '#5334cc', '#ff6edb', '#080716'],
  },
];

function getCircularOffset(index, activeIndex, total) {
  let offset = index - activeIndex;

  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;

  return offset;
}

export default function Photography() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartX = useRef(null);
  const slideCount = photoSlides.length;

  const showSlide = useCallback((index) => {
    setActiveIndex((index + slideCount) % slideCount);
  }, [slideCount]);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    const timer = window.setTimeout(showNext, 2000);
    return () => window.clearTimeout(timer);
  }, [activeIndex, showNext]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showNext();
    }
  };

  const handlePointerDown = (event) => {
    pointerStartX.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (pointerStartX.current === null) return;

    const distance = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(distance) < 45) return;
    if (distance > 0) showPrevious();
    else showNext();
  };

  return (
    <section className="photography-section" id="photography">
      <div className="photography-glow photography-glow-left" aria-hidden="true" />
      <div className="photography-glow photography-glow-right" aria-hidden="true" />

      <div className="photography-container">
        <motion.div
          className="photography-heading-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          <div className="photography-eyebrow">
            <FiCamera aria-hidden="true" />
            <span>A creative hobby</span>
          </div>
          <h2>Photography</h2>
          <p>
            A collection of moments, people, and perspectives I have captured
            through my lens whenever inspiration strikes.
          </p>
        </motion.div>

        <motion.div
          className="photography-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Photography gallery"
          tabIndex="0"
          onKeyDown={handleKeyDown}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => { pointerStartX.current = null; }}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          <div className="photography-stage" aria-live="off">
            {photoSlides.map((slide, index) => {
              const offset = getCircularOffset(index, activeIndex, slideCount);
              const distance = Math.abs(offset);
              const isActive = offset === 0;
              const isVisible = distance <= 2;

              return (
                <figure
                  key={slide.id}
                  className={`photo-frame ${isActive ? 'is-active' : ''}`}
                  data-distance={distance}
                  aria-hidden={!isActive}
                  onClick={() => showSlide(index)}
                  style={{
                    '--photo-x': `${offset * 58}%`,
                    '--photo-y': `${distance * 22}px`,
                    '--photo-scale': 1 - distance * 0.13,
                    '--photo-rotate': `${offset * -3.5}deg`,
                    '--photo-opacity': isVisible ? 1 : 0,
                    '--photo-z': 10 - distance,
                    '--photo-sky-top': slide.palette[0],
                    '--photo-sky-mid': slide.palette[1],
                    '--photo-light': slide.palette[2],
                    '--photo-ground': slide.palette[3],
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                >
                  {slide.src ? (
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                      style={{ objectPosition: slide.objectPosition }}
                    />
                  ) : (
                    <div className="photo-placeholder" aria-label={`${slide.label}: photo coming soon`}>
                      <span className="photo-placeholder-sun" />
                      <span className="photo-placeholder-ridge photo-placeholder-ridge-back" />
                      <span className="photo-placeholder-ridge photo-placeholder-ridge-front" />
                      <span className="photo-placeholder-grain" />
                      <span className="photo-placeholder-label">Your photo</span>
                    </div>
                  )}

                  <figcaption>
                    <span>{slide.label}</span>
                    <strong>{slide.title}</strong>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          <div className="photography-controls">
            <button type="button" onClick={showPrevious} aria-label="Show previous photograph">
              <FiArrowLeft aria-hidden="true" />
            </button>

            <div className="photography-dots" aria-label="Choose a photograph">
              {photoSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  className={index === activeIndex ? 'is-active' : ''}
                  onClick={() => showSlide(index)}
                  aria-label={`Show ${slide.label}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                />
              ))}
            </div>

            <button type="button" onClick={showNext} aria-label="Show next photograph">
              <FiArrowRight aria-hidden="true" />
            </button>
          </div>

          <div className="photography-meta" aria-live="polite">
            <span>{String(activeIndex + 1).padStart(2, '0')} / {String(slideCount).padStart(2, '0')}</span>
            <span className="photography-meta-separator" aria-hidden="true" />
            <span>Moves every 2 seconds</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
