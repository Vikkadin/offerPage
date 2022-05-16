function updateHeading(newHeading) {
  let heading = document.querySelector("h1");
  heading.innerHTML = newHeading;
}

function updateHeadingTwo(newHeadingTwo) {
  let headingTwo = document.querySelector("h2");
  headingTwo.innerHTML = newHeadingTwo;
}

function updateImage() {
  document.getElementById("coffee").src =
    " https://s3.amazonaws.com/shecodesio-production/uploads/files/000/034/331/original/cappuccino.gif?1652601753";
}

function updateParagraph() {
  const textElement = document.querySelector(".paragraph");
  const textElementContent = textElement.innerHTML;
  textElement.innerHTML = `<h3>Key ingredients</h3>
                                        <ul class="ingredients-list">
                                           <li><i class="key"></i>Espresso</li>
                                           <li><i class="key"></i>Steamed milk</li>
                                           <li><i class="key"></i>Foamed Milk</li>
                                        </ul>
                                      <h3>Equipment</h3>
                                        <ul class="equipment-list">
                                           <li><i class="key"></i>Coffee machine</li>
                                           <li><i class="key"></i>Milk jug</li>
                                           <li><i class="key"></i>Thermometer</li>
                                        </ul>
                                     <h3>Quick guide</h3>
                                         <ol>
                                           <li>Foam and texture the required quantity of milk.</li>
                                           <li>Brew a single or double espresso directly into your serving cup.</li>
                                           <li>Gently swirl the milk to release any large air bubbles, tap the milk jug against a table.</li>
                                          <li>Finish by giving the milk a slight 'wiggle' to ensure foam transfers from milk jug to the cup to top off your Cappuccino.</li>
                                          </ol>`;
}

function cappuccino() {
  let name = prompt(`What is your name?`);
  let email = prompt(
    `Hi! ${name} 👋  Give your email and get a great coffee recipe!`
  );

  if ((name.length, email.length > 0)) {
    alert(`☕ Here's your recipe! 👇`);
    updateImage();
    updateParagraph();
    updateHeading(`Cappuccino`);
    updateHeadingTwo(`My Favorite Coffee Recipe`);
  }
}

let getButton = document.querySelector(".getRecipe");
getButton.addEventListener("click", cappuccino);
