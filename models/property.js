const mongoose = require('mongoose');

var PropertySchema = new mongoose.Schema({
  listing_id: {
    type: String,
    index: true
  },
  property_report_url: {
    type: String
  },
  description: {
    type: String
  },
  first_published_date :{
    type: String
  },
  num_floors :{
    type: String
  },
  num_bedrooms :{
    type: String
  },
  num_bathrooms :{
    type: String
  },
  listing_status :{
    type: String,
    enum: ['rent', 'sale']
  },
  status :{
    type: String,
    enum: ['to_rent', 'for_sale']
  },
  property_type :{
    type: String,
    // enum: ['Terraced',
    //         'End of terrace',
    //         'End terrace house',
    //         'Semi-detached',
    //         'Detached',
    //         'Detached house',
    //         'Mews house',
    //         'Flat',
    //         'Maisonette',
    //         'Bungalow',
    //         'Town house',
    //         'Cottage',
    //         'Farm/Barn',
    //         'Mobile/static',
    //         'Land',
    //         'Studio',
    //         'Block of flats',
    //         'Office',
    //         ''
    //       ]
  },
  price :{
    type: String
  },
  latitude :{
    type: String
  },
  longitude :{
    type: String
  },
  displayable_address :{
    type: String
  },
  outcode :{
    type: String
  },
  country :{
    type: String
  },
  image_url :{
    type: String
  },
  thumbnail_url :{
    type: String
  }
});

var Property = mongoose.model('Property', PropertySchema);

module.exports = {Property};
