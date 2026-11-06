
const recipes = [
  {
    id: 1, name: "Arancini", category: "italian", image: "/images/arancini.jpeg",
    ingredients: "2 cups cooked risotto\n1/2 cup mozzarella cheese\n1/2 cup breadcrumbs\n1/4 cup flour\n1 egg\nSalt and pepper\nOil for frying",
    instructions: "1. Allow the cooked risotto to cool.\n2. Take a portion and place mozzarella in the centre.\n3. Shape into small balls.\n4. Coat each ball with flour, beaten egg and breadcrumbs.\n5. Deep-fry until golden brown.\n6. Serve hot with tomato sauce."
  },
  {
    id: 2, name: "Biryani", category: "indian", image: "/images/biryani.jpeg",
    ingredients: "2 cups basmati rice\n500 g chicken or vegetables\n2 onions, sliced\n2 tomatoes\n1/2 cup curd\n2 tbsp ginger-garlic paste\nBiryani masala\nMint and coriander leaves\nOil or ghee\nSalt",
    instructions: "1. Wash and soak rice for 20 minutes.\n2. Marinate chicken or vegetables with curd, spices and ginger-garlic paste.\n3. Fry onions until golden and cook the marinated mixture.\n4. Boil rice until it is about 70% cooked.\n5. Layer rice over the cooked mixture.\n6. Add mint, coriander and fried onions.\n7. Cover and cook on low heat until the rice is fully cooked.\n8. Mix gently and serve."
  },
  {
    id: 3, name: "Brownies", category: "dessert", image: "/images/brownies.jpeg",
    ingredients: "1/2 cup butter\n1 cup sugar\n2 eggs\n1/3 cup cocoa powder\n1/2 cup flour\n1 tsp vanilla extract\nA pinch of salt",
    instructions: "1. Preheat the oven to 180°C.\n2. Melt butter and mix with sugar.\n3. Add eggs and vanilla extract.\n4. Mix in cocoa powder, flour and salt.\n5. Pour the batter into a greased baking tray.\n6. Bake for 20–25 minutes.\n7. Cool, cut into squares and serve."
  },
  {
    id: 4, name: "Burger", category: "fastfood", image: "/images/burger.jpeg",
    ingredients: "2 burger buns\n2 vegetable or chicken patties\n2 cheese slices\nLettuce leaves\n1 tomato, sliced\n1 onion, sliced\nMayonnaise\nTomato ketchup\nOil",
    instructions: "1. Cook the patties in a pan with a little oil.\n2. Toast the burger buns lightly.\n3. Spread mayonnaise and ketchup on the buns.\n4. Place lettuce, tomato and onion on the bottom bun.\n5. Add the patty and cheese slice.\n6. Cover with the top bun and serve."
  },
  {
    id: 5, name: "Buritto", category: "mexican", image: "/images/buritto.jpeg",
    ingredients: "2 large tortillas\n1 cup cooked rice\n1 cup cooked beans\n1/2 cup corn\n1 tomato, chopped\n1/2 cup grated cheese\nLettuce\nSalsa\nSalt and pepper",
    instructions: "1. Warm the tortillas in a pan.\n2. Mix cooked rice, beans, corn and chopped tomato.\n3. Place the mixture in the centre of each tortilla.\n4. Add cheese, lettuce and salsa.\n5. Fold the sides inward and roll tightly.\n6. Toast briefly on a pan and serve."
  },
  {
    id: 6, name: "Cake", category: "dessert", image: "/images/cake.jpeg",
    ingredients: "1 1/2 cups flour\n1 cup sugar\n1/2 cup butter\n2 eggs\n1/2 cup milk\n1 tsp baking powder\n1 tsp vanilla extract",
    instructions: "1. Preheat the oven to 180°C.\n2. Cream butter and sugar together.\n3. Add eggs and vanilla extract.\n4. Add flour and baking powder gradually, alternating with milk.\n5. Pour into a greased cake tin.\n6. Bake for 30–35 minutes.\n7. Cool completely before serving."
  },
  {
    id: 7, name: "Cannoli", category: "dessert", image: "/images/cannoli.jpeg",
    ingredients: "1 cup flour\n1 tbsp sugar\n2 tbsp butter\n1/4 cup water\n1 cup ricotta cheese\n1/4 cup powdered sugar\n1/2 tsp vanilla extract\nOil for frying",
    instructions: "1. Mix flour, sugar, butter and water to make a firm dough.\n2. Roll the dough thinly and cut into circles.\n3. Wrap around cannoli tubes and seal the edges.\n4. Fry until crisp and golden.\n5. Cool and carefully remove the tubes.\n6. Mix ricotta, powdered sugar and vanilla.\n7. Fill the shells with the cream and serve."
  },
  {
    id: 8, name: "Caprese Salad", category: "salad", image: "/images/caprese salad.jpeg",
    ingredients: "2 ripe tomatoes\n200 g fresh mozzarella\nFresh basil leaves\n2 tbsp olive oil\n1 tbsp balsamic vinegar\nSalt and black pepper",
    instructions: "1. Slice the tomatoes and mozzarella.\n2. Arrange them alternately on a plate.\n3. Place fresh basil leaves between the slices.\n4. Drizzle olive oil and balsamic vinegar.\n5. Season with salt and pepper.\n6. Serve fresh."
  },
  {
    id: 9, name: "Cheesecake", category: "dessert", image: "/images/cheesecake.jpeg",
    ingredients: "200 g digestive biscuits\n75 g melted butter\n400 g cream cheese\n1/2 cup sugar\n1/2 cup fresh cream\n1 tsp vanilla extract\n1 tbsp lemon juice",
    instructions: "1. Crush the biscuits and mix with melted butter.\n2. Press the mixture into a cake tin and chill.\n3. Beat cream cheese and sugar until smooth.\n4. Add cream, vanilla and lemon juice.\n5. Pour over the biscuit base.\n6. Refrigerate for at least 5 hours until set.\n7. Add fruit topping if desired and serve."
  },
  {
    id: 10, name: "Chicken 65", category: "indian", image: "/images/chicken 65.jpeg",
    ingredients: "500 g boneless chicken\n2 tbsp curd\n1 tbsp ginger-garlic paste\n1 tbsp cornflour\n1 tbsp rice flour\nChilli powder\nTurmeric\nGaram masala\nCurry leaves\nSalt and oil",
    instructions: "1. Cut chicken into small pieces.\n2. Mix with curd, ginger-garlic paste, chilli powder, turmeric, garam masala, cornflour and rice flour.\n3. Marinate for 30 minutes.\n4. Deep-fry the chicken until crisp and fully cooked.\n5. Fry curry leaves separately.\n6. Toss the chicken with curry leaves and serve hot."
  },
  {
    id: 11, name: "Chicken Manchuria", category: "indian", image: "/images/chicken manchuria.jpeg",
    ingredients: "300 g boneless chicken\n2 tbsp cornflour\n1 tbsp flour\n1 tbsp ginger-garlic paste\n1 onion, chopped\n1 capsicum, chopped\n2 tbsp soy sauce\n1 tbsp chilli sauce\n1 tbsp tomato ketchup\nSpring onions\nOil and salt",
    instructions: "1. Mix chicken with cornflour, flour, ginger-garlic paste and salt.\n2. Deep-fry until cooked and crispy.\n3. Heat oil in another pan and sauté onion and capsicum.\n4. Add soy sauce, chilli sauce and ketchup.\n5. Add the fried chicken and toss well.\n6. Garnish with spring onions and serve."
  },
  {
    id: 12, name: "Chicken Nuggets", category: "fastfood", image: "/images/chicken nuggets.jpeg",
    ingredients: "300 g boneless chicken\n1/2 cup breadcrumbs\n1 egg\n2 tbsp flour\n1/2 tsp garlic powder\n1/2 tsp pepper\nSalt\nOil",
    instructions: "1. Mince the chicken and season with garlic powder, pepper and salt.\n2. Shape into small nugget pieces.\n3. Coat with flour, beaten egg and breadcrumbs.\n4. Refrigerate for 15 minutes.\n5. Fry until golden and fully cooked.\n6. Serve with ketchup or mayonnaise."
  },
  {
    id: 13, name: "Chocolate Cake", category: "dessert", image: "/images/chocolate cake.jpeg",
    ingredients: "1 1/2 cups flour\n1 cup sugar\n1/2 cup cocoa powder\n2 eggs\n1/2 cup milk\n1/2 cup oil\n1 tsp baking powder\n1 tsp vanilla extract",
    instructions: "1. Preheat the oven to 180°C.\n2. Mix flour, sugar, cocoa powder and baking powder.\n3. Add eggs, milk, oil and vanilla.\n4. Beat until the batter is smooth.\n5. Pour into a greased cake tin.\n6. Bake for 30–35 minutes.\n7. Cool and decorate with chocolate frosting."
  },
  {
    id: 14, name: "Churros", category: "dessert", image: "/images/churros.jpeg",
    ingredients: "1 cup water\n2 tbsp butter\n1 tbsp sugar\n1 cup flour\n1 egg\n1/2 tsp vanilla extract\nOil for frying\nSugar and cinnamon for coating",
    instructions: "1. Heat water, butter and sugar in a saucepan.\n2. Add flour and stir until a dough forms.\n3. Cool slightly and mix in egg and vanilla.\n4. Transfer the dough to a piping bag with a star nozzle.\n5. Pipe strips into hot oil and fry until golden.\n6. Roll in cinnamon sugar and serve."
  },
  {
    id: 15, name: "Cr", category: "indian", image: "/images/cr.jpeg",
    ingredients: "Recipe name needs confirmation\nPlease confirm what 'Cr' stands for before adding the correct ingredients.",
    instructions: "The recipe name is unclear as 'Cr'. Please confirm the full dish name so the correct cooking process can be added."
  },
  {
    id: 16, name: "Cupcakes", category: "dessert", image: "/images/cupcakes.jpeg",
    ingredients: "1 cup flour\n1/2 cup sugar\n1/2 cup butter\n2 eggs\n1/4 cup milk\n1 tsp baking powder\n1 tsp vanilla extract",
    instructions: "1. Preheat the oven to 180°C.\n2. Cream butter and sugar until fluffy.\n3. Add eggs and vanilla.\n4. Mix in flour and baking powder, adding milk gradually.\n5. Divide the batter into cupcake liners.\n6. Bake for 18–20 minutes.\n7. Cool and decorate."
  },
  {
    id: 17, name: "Curd Rice", category: "indian", image: "/images/curd rice.jpeg",
    ingredients: "1 cup rice\n1 cup curd\n1/4 cup milk\n1 tsp mustard seeds\n1 tsp urad dal\n1 green chilli\n1 tbsp grated ginger\nCurry leaves\nCoriander leaves\nSalt and oil",
    instructions: "1. Cook rice until soft and allow it to cool.\n2. Mash lightly and mix with curd and milk.\n3. Heat oil and add mustard seeds and urad dal.\n4. Add green chilli, ginger and curry leaves.\n5. Pour the tempering over the rice.\n6. Add salt and mix well.\n7. Garnish with coriander and serve."
  },
  {
    id: 18, name: "Dan Dan Noodles", category: "chinese", image: "/images/dan dan noodles.jpeg",
    ingredients: "200 g noodles\n150 g minced chicken or tofu\n2 tbsp sesame paste\n1 tbsp soy sauce\n1 tbsp chilli oil\n2 garlic cloves\n1 tsp grated ginger\nSpring onions\n1 tsp vinegar",
    instructions: "1. Cook noodles according to the packet instructions and drain.\n2. Cook minced chicken or tofu in a pan.\n3. Mix sesame paste, soy sauce, chilli oil, garlic, ginger and vinegar.\n4. Add a little hot water to make a smooth sauce.\n5. Toss noodles with the sauce.\n6. Top with cooked chicken or tofu and spring onions."
  },
  {
    id: 19, name: "Donuts", category: "dessert", image: "/images/donuts.jpeg",
    ingredients: "2 cups flour\n2 tbsp sugar\n1 tsp yeast\n1/2 cup warm milk\n2 tbsp butter\n1 egg\n1/2 tsp salt\nOil for frying",
    instructions: "1. Mix warm milk, yeast and sugar and let it rest for 5 minutes.\n2. Add flour, butter, egg and salt.\n3. Knead into a soft dough and let it rise until doubled.\n4. Roll out and cut donut shapes.\n5. Let them rise again for 20 minutes.\n6. Fry until golden on both sides.\n7. Cool and glaze with chocolate or sugar."
  },
  {
    id: 20, name: "Dosa", category: "indian", image: "/images/dosa.jpeg",
    ingredients: "2 cups dosa rice\n1/2 cup urad dal\n1/2 tsp fenugreek seeds\nSalt\nWater\nOil or ghee",
    instructions: "1. Wash and soak rice, urad dal and fenugreek separately for 4–6 hours.\n2. Grind into a smooth batter using water.\n3. Mix and ferment overnight.\n4. Add salt and adjust the consistency.\n5. Spread a ladle of batter thinly on a hot greased pan.\n6. Drizzle oil around the edges.\n7. Cook until crisp and serve with chutney and sambar."
  },
  {
    id: 21, name: "Fish Curry", category: "indian", image: "/images/fish curry.jpeg",
    ingredients: "500 g fish pieces\n2 onions\n2 tomatoes\n1 tbsp ginger-garlic paste\n1/2 tsp turmeric\n2 tsp chilli powder\n1 tsp coriander powder\nSmall lemon-sized tamarind\nCurry leaves\nSalt and oil",
    instructions: "1. Clean the fish and season with turmeric and salt.\n2. Soak tamarind in warm water and extract the juice.\n3. Heat oil and sauté onions, curry leaves and ginger-garlic paste.\n4. Add tomatoes and spices and cook until soft.\n5. Add tamarind water and simmer.\n6. Add fish pieces carefully.\n7. Cook gently until the fish is fully cooked and the gravy thickens."
  },
  {
    id: 22, name: "French Fries", category: "fastfood", image: "/images/french fries.jpeg",
    ingredients: "3 large potatoes\nOil for frying\nSalt\n1/2 tsp pepper\n1/2 tsp chilli powder (optional)",
    instructions: "1. Peel and cut potatoes into thin strips.\n2. Soak in cold water for 30 minutes.\n3. Drain and dry completely.\n4. Fry once at medium heat until soft but not browned.\n5. Remove and cool briefly.\n6. Fry again at higher heat until golden and crispy.\n7. Season with salt and spices."
  },
  {
    id: 23, name: "Garlic Prawns", category: "seafood", image: "/images/garlic prawns.jpeg",
    ingredients: "300 g cleaned prawns\n5 garlic cloves, chopped\n2 tbsp butter\n1 tbsp olive oil\n1 tbsp lemon juice\n1/2 tsp pepper\nChilli flakes\nSalt\nCoriander leaves",
    instructions: "1. Clean and pat dry the prawns.\n2. Season with salt and pepper.\n3. Heat butter and olive oil in a pan.\n4. Add garlic and sauté briefly.\n5. Add prawns and cook until pink and fully cooked.\n6. Add lemon juice and chilli flakes.\n7. Garnish with coriander and serve."
  },
  {
    id: 24, name: "Gnochhi", category: "italian", image: "/images/gnochhi.jpeg",
    ingredients: "500 g potatoes\n1 cup flour\n1 egg\n1/2 tsp salt\n1/4 cup butter\n2 garlic cloves\nParmesan cheese\nBlack pepper",
    instructions: "1. Boil potatoes until tender, then peel and mash smoothly.\n2. Mix with flour, egg and salt to form a soft dough.\n3. Roll into long ropes and cut into small pieces.\n4. Press each piece lightly with a fork.\n5. Boil in salted water until the gnocchi float.\n6. Drain and toss with melted butter and garlic.\n7. Add Parmesan and pepper before serving."
  },
  {
    id: 25, name: "Grilled Fish", category: "seafood", image: "/images/grilled fish.jpeg",
    ingredients: "2 fish fillets\n1 tbsp lemon juice\n1 tbsp olive oil\n1 tsp ginger-garlic paste\n1/2 tsp pepper\n1/2 tsp chilli powder\nSalt\nCoriander",
    instructions: "1. Clean and pat dry the fish fillets.\n2. Mix lemon juice, olive oil, ginger-garlic paste and spices.\n3. Coat the fish and marinate for 20 minutes.\n4. Preheat a grill pan.\n5. Grill the fish on both sides until cooked through.\n6. Garnish with coriander and lemon wedges."
  },
  {
    id: 26, name: "Ice Creams", category: "dessert", image: "/images/icecreams.jpeg",
    ingredients: "2 cups chilled whipping cream\n1 cup condensed milk\n1 tsp vanilla extract",
    instructions: "1. Whip the chilled cream until soft peaks form.\n2. Add condensed milk and vanilla.\n3. Fold gently until combined.\n4. Transfer to a freezer-safe container.\n5. Cover and freeze for 6–8 hours or until firm.\n6. Scoop and serve."
  },
  {
    id: 27, name: "Idli", category: "indian", image: "/images/idli.jpeg",
    ingredients: "2 cups idli rice\n1/2 cup urad dal\n1/2 tsp fenugreek seeds\nSalt\nWater",
    instructions: "1. Wash and soak rice and urad dal separately for 4–6 hours.\n2. Grind urad dal until fluffy and grind rice slightly coarse.\n3. Mix both batters and add salt.\n4. Ferment overnight.\n5. Grease idli plates and pour in the batter.\n6. Steam for 10–12 minutes.\n7. Cool slightly and remove the idlis. Serve with chutney and sambar."
  },
  {
    id: 28, name: "Italian Panini", category: "italian", image: "/images/italian panini.jpeg",
    ingredients: "2 panini rolls\n4 cheese slices\n1 tomato, sliced\n1/2 capsicum, sliced\nOlives\nBasil leaves\n2 tbsp pesto or mayonnaise\nOlive oil",
    instructions: "1. Slice the panini rolls horizontally.\n2. Spread pesto or mayonnaise on the inside.\n3. Layer cheese, tomato, capsicum, olives and basil.\n4. Close the rolls and brush the outside lightly with olive oil.\n5. Grill in a panini press or pan until crisp and the cheese melts.\n6. Cut and serve warm."
  },
  {
    id: 29, name: "Kung Pao Chicken", category: "chinese", image: "/images/kung pao chicken.jpeg",
    ingredients: "400 g boneless chicken\n1/2 cup roasted peanuts\n1 capsicum\n2 tbsp soy sauce\n1 tbsp vinegar\n1 tbsp chilli sauce\n2 garlic cloves\n1 tsp ginger\n1 tsp cornflour\nSpring onions\nOil",
    instructions: "1. Cut chicken into small cubes and coat lightly with cornflour.\n2. Mix soy sauce, vinegar and chilli sauce.\n3. Heat oil and cook chicken until fully cooked.\n4. Add garlic, ginger and capsicum.\n5. Pour in the sauce and stir until slightly thickened.\n6. Add roasted peanuts and mix.\n7. Garnish with spring onions."
  },
  {
    id: 30, name: "Lasagna", category: "italian", image: "/images/lasagna.jpeg",
    ingredients: "8 lasagna sheets\n2 cups tomato pasta sauce\n1 cup cooked minced meat or vegetables\n1 cup ricotta or paneer\n1 cup mozzarella cheese\n1/2 cup Parmesan cheese\n1 onion\n2 garlic cloves\nSalt and pepper",
    instructions: "1. Cook lasagna sheets according to packet instructions.\n2. Sauté onion and garlic, then cook the meat or vegetables.\n3. Add tomato sauce and simmer.\n4. Spread sauce in a baking dish.\n5. Layer lasagna sheets, filling and cheese.\n6. Repeat the layers and finish with cheese.\n7. Bake at 180°C for 30–35 minutes.\n8. Rest for 10 minutes before slicing."
  },
  {
    id: 31, name: "Lemon Rice", category: "indian", image: "/images/lemon rice.jpeg",
    ingredients: "2 cups cooked rice\n2 tbsp oil\n1 tsp mustard seeds\n1 tsp urad dal\n2 tbsp peanuts\n2 green chillies\n1/2 tsp turmeric\nCurry leaves\n2 tbsp lemon juice\nSalt",
    instructions: "1. Cook rice and allow it to cool.\n2. Heat oil and add mustard seeds and urad dal.\n3. Add peanuts, green chillies and curry leaves.\n4. Add turmeric and salt.\n5. Add cooked rice and mix gently.\n6. Turn off the heat and add lemon juice.\n7. Mix and serve."
  },
  {
    id: 32, name: "Margherita Pizza", category: "italian", image: "/images/margherita pizza.jpeg",
    ingredients: "1 pizza base\n1/2 cup pizza sauce\n1 cup mozzarella cheese\nFresh basil leaves\n1 tbsp olive oil\nSalt and pepper",
    instructions: "1. Preheat the oven to 220°C.\n2. Spread pizza sauce over the base.\n3. Add mozzarella cheese evenly.\n4. Arrange fresh basil leaves on top.\n5. Drizzle olive oil lightly.\n6. Bake for 10–15 minutes until the crust is crisp and cheese melts.\n7. Slice and serve."
  },
  {
    id: 33, name: "Mixed Vegetable Curry", category: "indian", image: "/images/mixed vegetable curry.jpeg",
    ingredients: "2 cups mixed vegetables\n2 onions\n2 tomatoes\n1 tbsp ginger-garlic paste\n1/2 tsp turmeric\n1 tsp chilli powder\n1 tsp coriander powder\n1/2 tsp garam masala\n1/4 cup curd or coconut milk\nSalt and oil",
    instructions: "1. Chop the vegetables into small pieces.\n2. Heat oil and sauté onions until golden.\n3. Add ginger-garlic paste and tomatoes.\n4. Add turmeric, chilli powder and coriander powder.\n5. Add vegetables, salt and a little water.\n6. Cover and cook until vegetables are tender.\n7. Add curd or coconut milk and garam masala.\n8. Simmer briefly and serve."
  },
  {
    id: 34, name: "Moong Dal Chilla", category: "indian", image: "/images/moong dal chilla.jpeg",
    ingredients: "1 cup yellow moong dal\n1 green chilli\n1 inch ginger\n1/2 onion, chopped\n2 tbsp coriander leaves\n1/2 tsp cumin\nSalt\nOil",
    instructions: "1. Wash and soak moong dal for 3–4 hours.\n2. Drain and grind with ginger, green chilli and a little water.\n3. Mix in onion, coriander, cumin and salt.\n4. Heat a greased pan.\n5. Spread a ladle of batter into a thin circle.\n6. Cook both sides until golden.\n7. Serve with chutney."
  },
  {
    id: 35, name: "Mutton Biryani", category: "indian", image: "/images/mutton biryani.jpeg",
    ingredients: "500 g mutton\n2 cups basmati rice\n2 onions, sliced\n2 tomatoes\n1/2 cup curd\n2 tbsp ginger-garlic paste\nBiryani masala\nMint and coriander leaves\nWhole spices\nOil or ghee\nSalt",
    instructions: "1. Wash and soak rice for 20 minutes.\n2. Marinate mutton with curd, ginger-garlic paste and spices.\n3. Cook the mutton with onions and tomatoes until tender.\n4. Parboil the rice with whole spices.\n5. Layer the rice over the cooked mutton.\n6. Add mint, coriander and fried onions.\n7. Cover and cook on low heat until the rice is fully cooked.\n8. Rest briefly, mix gently and serve."
  },
  {
    id: 36, name: "Noodles", category: "chinese", image: "/images/noodles.jpeg",
    ingredients: "200 g noodles\n1 carrot, sliced\n1 capsicum, sliced\n1 cup cabbage\n2 garlic cloves\n2 tbsp soy sauce\n1 tbsp chilli sauce\n1 tbsp oil\nSalt and pepper\nSpring onions",
    instructions: "1. Boil noodles according to the packet instructions.\n2. Drain and toss with a little oil.\n3. Heat oil in a wok and sauté garlic.\n4. Add carrot, capsicum and cabbage.\n5. Stir-fry on high heat until slightly tender.\n6. Add noodles, soy sauce and chilli sauce.\n7. Toss well, season and garnish with spring onions."
  },
  {
    id: 37, name: "Oatmeal", category: "breakfast", image: "/images/oatmeal.jpeg",
    ingredients: "1/2 cup rolled oats\n1 cup milk or water\n1 tsp honey\n1 banana, sliced\n1 tbsp nuts\n1/2 tsp cinnamon",
    instructions: "1. Add oats and milk or water to a saucepan.\n2. Cook over medium heat for 5–7 minutes, stirring regularly.\n3. Add cinnamon and honey.\n4. Pour into a bowl.\n5. Top with banana slices and nuts.\n6. Serve warm."
  },
  {
    id: 38, name: "Onion Rings", category: "fastfood", image: "/images/onion rings.jpeg",
    ingredients: "2 large onions\n1/2 cup flour\n1/4 cup cornflour\n1/2 cup milk\n1 egg\n1 cup breadcrumbs\nSalt and pepper\nOil for frying",
    instructions: "1. Peel onions and cut them into thick rings.\n2. Separate the rings carefully.\n3. Mix flour, cornflour, milk, egg, salt and pepper into a batter.\n4. Dip onion rings in the batter.\n5. Coat with breadcrumbs.\n6. Deep-fry until golden and crispy.\n7. Serve with a dipping sauce."
  },
  {
    id: 39, name: "Pancake", category: "breakfast", image: "/images/pancake.jpeg",
    ingredients: "1 cup flour\n1 tbsp sugar\n1 tsp baking powder\n1 egg\n3/4 cup milk\n2 tbsp melted butter\n1/2 tsp vanilla extract\nA pinch of salt",
    instructions: "1. Mix flour, sugar, baking powder and salt.\n2. Whisk egg, milk, melted butter and vanilla separately.\n3. Combine wet and dry ingredients without overmixing.\n4. Pour small portions onto a greased hot pan.\n5. Cook until bubbles appear, then flip.\n6. Cook the other side until golden.\n7. Serve with honey or fruit."
  },
  {
    id: 40, name: "Paneer", category: "indian", image: "/images/paneer.jpeg",
    ingredients: "250 g paneer\n2 onions\n2 tomatoes\n1 tbsp ginger-garlic paste\n1/2 tsp turmeric\n1 tsp chilli powder\n1 tsp coriander powder\n1/2 tsp garam masala\n1/4 cup cream or milk\nSalt and oil",
    instructions: "1. Cut paneer into cubes.\n2. Heat oil and sauté onions until golden.\n3. Add ginger-garlic paste and tomatoes.\n4. Add turmeric, chilli powder and coriander powder.\n5. Cook until the tomatoes soften, then blend if desired.\n6. Return the gravy to the pan and add paneer.\n7. Add cream and garam masala.\n8. Simmer for a few minutes and serve."
  },
  {
    id: 41, name: "Panna Cotta", category: "dessert", image: "/images/panna cotta.jpeg",
    ingredients: "2 cups fresh cream\n1/2 cup milk\n1/4 cup sugar\n1 tsp vanilla extract\n2 tsp gelatin\n3 tbsp cold water",
    instructions: "1. Sprinkle gelatin over cold water and let it bloom.\n2. Heat cream, milk and sugar gently until the sugar dissolves.\n3. Remove from heat and stir in the gelatin.\n4. Add vanilla and mix well.\n5. Pour into small moulds.\n6. Refrigerate for at least 4 hours until set.\n7. Serve with fruit sauce."
  },
  {
    id: 42, name: "Pasta", category: "italian", image: "/images/pasta.jpeg",
    ingredients: "200 g pasta\n1 cup tomato sauce\n1 onion, chopped\n2 garlic cloves\n1/2 capsicum\n1 tbsp olive oil\n1/2 tsp chilli flakes\n1/2 tsp oregano\nGrated cheese\nSalt and pepper",
    instructions: "1. Boil pasta in salted water until tender.\n2. Drain and reserve a little pasta water.\n3. Heat olive oil and sauté onion and garlic.\n4. Add capsicum and cook briefly.\n5. Add tomato sauce, oregano and chilli flakes.\n6. Add pasta and toss well.\n7. Add a little pasta water if needed.\n8. Top with cheese and serve."
  },
  {
    id: 43, name: "Pdal Palak", category: "indian", image: "/images/pdal palak.jpeg",
    ingredients: "1 cup toor dal or moong dal\n2 cups chopped spinach\n1 onion\n1 tomato\n2 green chillies\n1/2 tsp turmeric\n1 tsp cumin\n3 garlic cloves\n1 tsp mustard seeds\nCurry leaves\nSalt and oil",
    instructions: "1. Wash dal and pressure-cook with turmeric and water until soft.\n2. Heat oil in a pan and add mustard seeds and cumin.\n3. Add garlic, onion, green chillies and curry leaves.\n4. Add tomato and cook until soft.\n5. Add chopped spinach and cook until wilted.\n6. Add cooked dal and salt.\n7. Simmer for 5–7 minutes and serve with rice."
  },
  {
    id: 44, name: "Peanut Butter", category: "breakfast", image: "/images/peanut butter.jpeg",
    ingredients: "2 cups roasted peanuts\n1–2 tsp honey (optional)\nA pinch of salt\n1 tsp peanut or vegetable oil (optional)",
    instructions: "1. Allow roasted peanuts to cool.\n2. Place them in a food processor.\n3. Blend until the peanuts release their natural oils and become creamy.\n4. Add salt and honey if desired.\n5. Add a little oil if a smoother texture is needed.\n6. Store in a clean airtight jar."
  },
  {
    id: 45, name: "Pizza Quattro Formaggi", category: "italian", image: "/images/pizza quattro formaggi.jpeg",
    ingredients: "1 pizza base\n1/2 cup mozzarella cheese\n1/4 cup Parmesan cheese\n1/4 cup Gorgonzola or blue cheese\n1/4 cup fontina cheese\n2 tbsp olive oil\nBlack pepper",
    instructions: "1. Preheat the oven to 220°C.\n2. Place the pizza base on a baking tray.\n3. Brush lightly with olive oil.\n4. Spread the four cheeses evenly over the base.\n5. Sprinkle with black pepper.\n6. Bake for 10–15 minutes until the crust is crisp and cheese melts.\n7. Slice and serve hot."
  },
  {
    id: 46, name: "Pizza", category: "italian", image: "/images/pizza.jpeg",
    ingredients: "1 pizza base\n1/2 cup pizza sauce\n1 cup mozzarella cheese\n1 onion, sliced\n1 capsicum, sliced\n1 tomato, sliced\nOlives\n1 tsp oregano\n1 tsp chilli flakes",
    instructions: "1. Preheat the oven to 220°C.\n2. Spread pizza sauce over the base.\n3. Add mozzarella cheese.\n4. Arrange onion, capsicum, tomato and olives.\n5. Sprinkle oregano and chilli flakes.\n6. Bake for 10–15 minutes until the cheese melts and crust is golden.\n7. Slice and serve."
  },
  {
    id: 47, name: "Ravioli", category: "italian", image: "/images/ravioli.jpeg",
    ingredients: "2 cups flour\n2 eggs\n1 tbsp olive oil\n1/2 tsp salt\n1 cup ricotta or paneer\n1/4 cup Parmesan cheese\nBlack pepper\n1 cup tomato sauce",
    instructions: "1. Mix flour, eggs, olive oil and salt to make pasta dough.\n2. Knead and rest the dough for 30 minutes.\n3. Mix ricotta or paneer with Parmesan and pepper.\n4. Roll the dough into thin sheets.\n5. Place small portions of filling on one sheet.\n6. Cover with another sheet and seal around the filling.\n7. Cut into ravioli pieces.\n8. Boil until they float, drain and serve with tomato sauce."
  },
  {
    id: 48, name: "Risotto", category: "italian", image: "/images/risotto.jpeg",
    ingredients: "1 cup Arborio rice\n1 onion, finely chopped\n2 garlic cloves\n3 cups warm vegetable stock\n2 tbsp butter\n1 tbsp olive oil\n1/2 cup Parmesan cheese\nSalt and pepper",
    instructions: "1. Heat olive oil and half the butter in a pan.\n2. Sauté onion and garlic until soft.\n3. Add rice and stir for 1–2 minutes.\n4. Add warm stock one ladle at a time, stirring regularly.\n5. Continue adding stock as the rice absorbs it.\n6. Cook until creamy and the rice is tender but slightly firm.\n7. Stir in remaining butter and Parmesan.\n8. Season and serve immediately."
  },
  {
    id: 49, name: "Saltimbocca", category: "italian", image: "/images/saltimbocca.jpeg",
    ingredients: "4 thin chicken or veal cutlets\n4 slices prosciutto\n4 sage leaves\n2 tbsp butter\n1 tbsp olive oil\n1/4 cup stock\nSalt and pepper",
    instructions: "1. Place a sage leaf and prosciutto slice on each cutlet.\n2. Secure with a toothpick if needed.\n3. Season lightly with pepper and salt.\n4. Heat butter and olive oil in a pan.\n5. Cook the cutlets until golden and fully cooked.\n6. Remove the cutlets and add stock to the pan.\n7. Simmer the sauce briefly and pour over the cutlets.\n8. Serve warm."
  },
  {
    id: 50, name: "Sandwich", category: "fastfood", image: "/images/sandwich.jpeg",
    ingredients: "4 bread slices\n1 tomato, sliced\n1 cucumber, sliced\n1 onion, sliced\n2 cheese slices\n2 tbsp mayonnaise or green chutney\nButter\nSalt and pepper",
    instructions: "1. Spread mayonnaise or chutney on the bread slices.\n2. Arrange cucumber, tomato and onion on one slice.\n3. Add cheese, salt and pepper.\n4. Cover with another bread slice.\n5. Spread butter on the outside.\n6. Toast on a pan or sandwich maker until golden.\n7. Cut and serve."
  },
  {
    id: 51, name: "Shortcake", category: "dessert", image: "/images/shortcake.jpeg",
    ingredients: "2 cups flour\n1/4 cup sugar\n2 tsp baking powder\n1/2 cup cold butter\n1/2 cup milk\n1 cup whipped cream\n1 cup fresh strawberries",
    instructions: "1. Preheat the oven to 200°C.\n2. Mix flour, sugar and baking powder.\n3. Rub in cold butter until the mixture resembles crumbs.\n4. Add milk and mix into a soft dough.\n5. Shape into small rounds and bake for 15–18 minutes.\n6. Cool completely.\n7. Split each shortcake and fill with whipped cream and strawberries.\n8. Serve fresh."
  },
  {
    id: 52, name: "Tiramisu", category: "dessert", image: "/images/tiramisu.jpeg",
    ingredients: "200 g ladyfinger biscuits\n1 cup strong coffee, cooled\n250 g mascarpone cheese\n1 cup whipping cream\n1/3 cup sugar\n1 tsp vanilla extract\nCocoa powder",
    instructions: "1. Prepare strong coffee and allow it to cool.\n2. Whip cream with sugar until soft peaks form.\n3. Fold in mascarpone and vanilla.\n4. Briefly dip each ladyfinger in coffee.\n5. Arrange a layer in a dish.\n6. Spread half the cream mixture over it.\n7. Repeat the layers.\n8. Refrigerate for at least 6 hours.\n9. Dust with cocoa powder before serving."
  },
  {
    id: 53, name: "Upma", category: "indian", image: "/images/upma.jpeg",
    ingredients: "1 cup semolina (rava)\n1 onion, chopped\n1 green chilli\n1 tsp mustard seeds\n1 tsp urad dal\n1 tbsp peanuts or cashews\nCurry leaves\n2 1/2 cups water\n1 tbsp oil or ghee\nSalt",
    instructions: "1. Dry-roast semolina until aromatic and set aside.\n2. Heat oil and add mustard seeds and urad dal.\n3. Add peanuts or cashews, green chilli, onion and curry leaves.\n4. Sauté until the onion softens.\n5. Add water and salt and bring to a boil.\n6. Slowly add roasted semolina while stirring continuously.\n7. Cook until thick and fluffy.\n8. Serve hot."
  },
  {
    id: 54, name: "Vegetable Omelette", category: "breakfast", image: "/images/vegetable omelette.jpeg",
    ingredients: "2 eggs\n1/4 onion, chopped\n1/4 tomato, chopped\n1/4 capsicum, chopped\n1 green chilli\n2 tbsp coriander leaves\nSalt and pepper\n1 tsp oil",
    instructions: "1. Beat eggs in a bowl.\n2. Add onion, tomato, capsicum, green chilli and coriander.\n3. Season with salt and pepper.\n4. Heat oil in a non-stick pan.\n5. Pour in the egg mixture.\n6. Cook on medium-low heat until the bottom sets.\n7. Flip carefully and cook the other side until fully set.\n8. Serve warm."
  },
  {
    id: 55, name: "Vegetable Soup", category: "soup", image: "/images/vegetable soup.jpeg",
    ingredients: "1 carrot, chopped\n1/2 cup cabbage\n1/2 cup beans\n1/4 cup sweet corn\n1 onion, chopped\n2 garlic cloves\n4 cups vegetable stock or water\n1 tsp pepper\nSalt\n1 tsp oil",
    instructions: "1. Heat oil in a pot.\n2. Add garlic and onion and sauté briefly.\n3. Add carrot, beans, cabbage and corn.\n4. Pour in vegetable stock or water.\n5. Bring to a boil and simmer until the vegetables are tender.\n6. Season with salt and pepper.\n7. Serve hot."
  },
  {
    id: 56, name: "Waffles", category: "dessert", image: "/images/waffles.jpeg",
    ingredients: "1 1/2 cups flour\n2 tbsp sugar\n1 tsp baking powder\n1 egg\n1 cup milk\n1/4 cup melted butter\n1 tsp vanilla extract\nA pinch of salt",
    instructions: "1. Preheat the waffle maker.\n2. Mix flour, sugar, baking powder and salt.\n3. Whisk egg, milk, melted butter and vanilla separately.\n4. Combine wet and dry ingredients.\n5. Lightly grease the waffle maker.\n6. Pour in the batter and cook until golden and crisp.\n7. Serve with honey, fruit or chocolate sauce."
  }
];

export default recipes;
