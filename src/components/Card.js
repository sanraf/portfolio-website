import React from 'react'
// import '../Styles/Card.css'
import icon from '../Assets/971.png'

function Card() {
  return (
  
  <div class="main">
    <ul class="cards">
        <li class="cards_item">
        <div class="card">
            <div class="card_image"><img src={icon} alt="mixed vegetable salad in a mason jar. "/></div>
            <div class="card_content">
            <h2 class="card_title">Farmstand Salad &#x2022; $9</h2>
            <div class="card_text">
                <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of leafy greens and seasonal vegetables, fresh from the farmer's market.</p>
                <p>Served with your choice of dressing on the side: housemade ranch, cherry balsamic vinaigrette, creamy chipotle, avocado green goddess, or honey mustard. Add your choice of protein for $2 more. </p>
            </div>
            </div>
        </div>
        </li>

        <li class="cards_item">
        <div class="card">
            <div class="card_image"><img src={icon} alt="a Reuben sandwich on wax paper. "/></div>
            <div class="card_content">
            <h2 class="card_title">Ultimate Reuben &#x2022; $18</h2>
            <div class="card_text">
                <p>
                    All great meals take time, but this one takes it to the next level! More than 650 hours of fermenting, brining, aging, and curing goes into each and every one of our legendary Reuben sandwiches.
                </p>
                <p>
                    Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipe to the cave-aged Swiss cheese, right down to the pickle. The only thing we didn't make on the premises is the toothpick ( but we're looking into how to do that). 

                </p>
                <p>This unforgettable sandwich has all of the classic Reuben elements: corned beef, rye bread, creamy Russian dressing, sauerkraut, plus a sweet gherkin pickle. No substitions please!
                </p>
                <p>Add a side of french fries or sweet potato fries for $2 more, or our housemade pub chips for $1.</p>
            
            </div>
            </div>
        </div>
        </li>

        <li class="cards_item">
        <div class="card">
            <div class="card_image"><img src={icon} alt="A side view of a plate of figs and berries. "/></div>
            <div class="card_content">
            <h2 class="card_title">Fig &amp; Berry Plate &#x2022; $16</h2>
            <div class="card_text">
                <p><span class="note">Seasonal.</span></p>
                <p>A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in this refreshing, shareable dessert.</p>
                <p>Choose your drizzle: cherry-balsamic vinegar, local honey, or housemade chocolate sauce. </p>
            </div>
            </div>
        </div>
        </li>
    </ul>
</div>
    
  )
}

export default Card
