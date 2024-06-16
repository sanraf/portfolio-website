
import '../Styles/StackedCards.css'; // Import your CSS file


import React, { useState, useRef } from "react";
import { FcNext, FcPrevious } from 'react-icons/fc';
import bak from '../Assets/hero-image.png'
import bak1 from '../Assets/hero_2.png'
import bak2 from '../Assets/task_bckg.png'


const StackedCards = () => {
  
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Project Overview",
      content: (
        <p className='overview'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed felis eget velit aliquet sagittis id consectetur.
     
        </p>
      ),
      backgroundImage: bak,
      backgroundColor:'#00c7b3'    },
    {
      id: 2,
      title: "Used Technologies",
      content: (
        <p className='overview'>
          &#x27A5; Java <br />
          &#x27A5; Android Studio <br />
          &#x27A5; Room Database <br />
          &#x27A5; Java <br />
          &#x27A5; Android Studio <br />
          &#x27A5; Room Database
          
        </p>
      ),
      backgroundImage: bak1,
      backgroundColor:'#00c7b3'
    },
    {
      id: 3,
      title: "Communication Skills",
      content: (
        <p className='overview'>
        According to Google, a good manager: 
        1. Is a good coach. 
        2. Empowers team and does not micromanage.
      </p>
      ),
      backgroundImage: bak2,
      backgroundColor:'#23857a'
    }
  ]);

  const containerRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const handleNext = () => {
    setAnimationClass("throwing-next");
    setTimeout(() => {
      setCards((prevCards) => {
        const updatedCards = [...prevCards];
        const firstCard = updatedCards.shift();
        updatedCards.push(firstCard);
        return updatedCards;
      });
      setAnimationClass("");
    }, 500);
  };

  const handlePrev = () => {
    setAnimationClass("throwing-prev");
    setTimeout(() => {
      setCards((prevCards) => {
        const updatedCards = [...prevCards];
        const lastCard = updatedCards.pop();
        updatedCards.unshift(lastCard);
        return updatedCards;
      });
      setAnimationClass("");
    }, 500);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    const diff = currentX - startX;

    if (diff > 50) {
        handleNext();
      setIsDragging(false);
    } else if (diff < -50) {
        handlePrev();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="containers">
      <div
        className="card-stack"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        <ul className="card-list">
          {cards.slice(0, 3).map((card, index) => (
            <li
              key={card.id}
              className={index === 0 ? animationClass : ""}
              style={{ backgroundImage: `url(${card.backgroundImage})` ,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundColor: card.backgroundColor}}
            >
              <h2>{card.title}</h2>
              {card.content}
            </li>
          ))}
        </ul>
        <FcPrevious className="buttonss prev" onClick={handlePrev}/>
        <FcNext className="buttonss next" onClick={handleNext}/>
      </div>

    </div>
  );
};

export default StackedCards;



