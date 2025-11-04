require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
 
const projects = [
  { title: 'Corporate Website', description: 'Responsive website for a corporate client', image: '', url: '' },
  { title: 'Retail Mobile App', description: 'Android & iOS retail app', image: '', url: '' },
  { title: 'Cloud Migration', description: 'AWS migration for data and apps', image: '', url: '' }
];

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('Connected to DB, seeding projects...');
  await Project.deleteMany({});
  await Project.insertMany(projects);
  console.log('Seeded projects');
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
