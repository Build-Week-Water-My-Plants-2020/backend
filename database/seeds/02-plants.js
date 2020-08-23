
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("plants")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("plants").insert([
        {
          user_id: "1",
          nickname: "Flowering Maple",
          h2oFrequency: "Water in 1 day",
          last_water: "08-20-2020",
          image: ""
        },
        {
          user_id: "1",
          nickname: "Ageratum",
          h2oFrequency: "Water in 2 day",
          last_water: "08-20-2020",
          image: ""
        },
        {
          user_id: "1",
          nickname: "Aloe barbadensis",
          h2oFrequency: "Water in 3 day",
          last_water: "08-20-2020",
          image: ""
        },
        {
          user_id: "1",
          nickname: "Gebera Jamesonii",
          h2oFrequency: "Water in 4 day",
          last_water: "08-20-2020",
          image: ""
        },
        {
          user_id: "2",
          nickname: "Strelitzia Reginae",
          h2oFrequency: "Water in 5 day",
          last_water: "08-20-2020",
          image: ""
        },
        {
          user_id: "2",
          nickname: "Impatiens Walleriana",
          h2oFrequency: "Water in 6 day",
          last_water: "08-20-2020",
          image: ""
        },
        {
          user_id: "2",
          nickname: "Zantedeschia aethiopica",
          h2oFrequency: "Water in 7 day",
          last_water: "08-20-2020",
          image: ""
        },
        {
          user_id: "2",
          nickname: "Calathea Crocata",
          h2oFrequency: "Water in 8 day",
          last_water: "08-20-2020",
          image: ""
        },
        {
          user_id: "2",
          nickname: "Pachystachys Lutea",
          h2oFrequency: "Water in 9 day",
          last_water: "08-20-2020",
          image: ""
        }
      ]);
    });
};
