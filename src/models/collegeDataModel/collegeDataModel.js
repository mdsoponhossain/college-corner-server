const mongoose = require('mongoose');
const collegeDataSchema = require('../../schemas/collegeSchema/collegeSchema');

// const topCollegeModel = new mongoose.model('topCollegeCollection',collegeDataSchema);
const collegeDataModel = new mongoose.model('collegeCollection',collegeDataSchema);

module.exports = collegeDataModel ;
// module.exports = topCollegeModel ;