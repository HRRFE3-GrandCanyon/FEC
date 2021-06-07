import React, { useState } from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import YourOutfitCard from './YourOutfitCard.jsx';
import ArrowRight from './ArrowRight.jsx';
import ArrowLeft from './ArrowLeft.jsx';
import RelatedProductAddToOutfitCard from './RelatedProductAddToOutfitCard.jsx';

const RelatedProductsCarousel = ({ title, setModalOpen }) => {
  const [currentCard, setCurrentCard] = useState(1);
  const [currentCardOutfit, setCurrentCardOutfit] = useState(1);

  // document.querySelectorAll('.rp .rp-card') will be the length of the relatedproducts state array

  const handleNextClick = () => {
    if (document.querySelectorAll('.rp .rp-card').length - currentCard > 2) {
      document.querySelectorAll('.rp .rp-card').forEach(item => (item.style.transform = `translateX(-${317 * currentCard}px)`, item.style.transitionDuration = '0.5s'));
      setCurrentCard(currentCard + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentCard !== 1) {
      document.querySelectorAll('.rp .rp-card').forEach(item => (item.style.transform = `translateX(-${317 * (currentCard - 2)}px)`, item.style.transitionDuration = '0.5s'));
      setCurrentCard(currentCard - 1);
    }
  };

  const handleNextClickOutfit = () => {
    const addCardLength = document.querySelectorAll('.yo .add-to-outfit-card');
    const outfitCardLength = document.querySelectorAll('.yo .yo-card');
    if (addCardLength.length + outfitCardLength.length - currentCardOutfit > 2) {
      addCardLength.forEach(item => (item.style.transform = `translateX(-${317 * currentCardOutfit}px)`, item.style.transitionDuration = '0.5s'));
      outfitCardLength.forEach(item => (item.style.transform = `translateX(-${317 * currentCardOutfit}px)`, item.style.transitionDuration = '0.5s'));
      setCurrentCardOutfit(currentCardOutfit + 1);
    }
  };

  const handlePrevClickOutfit = () => {
    const addCardLength = document.querySelectorAll('.yo .add-to-outfit-card');
    const outfitCardLength = document.querySelectorAll('.yo .yo-card');
    if (currentCardOutfit !== 1) {
      addCardLength.forEach(item => (item.style.transform = `translateX(-${317 * (currentCardOutfit - 2)}px)`, item.style.transitionDuration = '0.5s'));
      outfitCardLength.forEach(item => (item.style.transform = `translateX(-${317 * (currentCardOutfit - 2)}px)`, item.style.transitionDuration = '0.5s'));
      setCurrentCardOutfit(currentCardOutfit - 1);
    }
  };

  return (title !== 'YOUR OUTFIT') ?
    (
      <>
        <h2>{title}</h2>
        <div className="rp-carousel rp">
          <ArrowLeft handlePrevClick={handlePrevClick} />
          <div className="card-container">
            <RelatedProductCard setModalOpen={setModalOpen}/>
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
          </div>
          <ArrowRight handleNextClick={handleNextClick} />
        </div>
      </>
    ) : (
      <>
        <h2>{title}</h2>
        <div className="rp-carousel yo">
          <ArrowLeft handlePrevClick={handlePrevClickOutfit} />
          <div className="card-container">
            <RelatedProductAddToOutfitCard />
            <YourOutfitCard />
            <YourOutfitCard />
            <YourOutfitCard />
          </div>
          <ArrowRight handleNextClick={handleNextClickOutfit} />
        </div>
      </>
    );
};

export default RelatedProductsCarousel;