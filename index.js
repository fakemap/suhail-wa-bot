// Fix 1: Set SmdOfficial early so serialized.js processes messages
global.SmdOfficial = 'yes';

const bot = require(__dirname + '/lib/smd')
const { VERSION } = require(__dirname + '/config')
const mongoose = require('mongoose')

// Fix 2: Connect MongoDB directly, independently of the bot's internal logic
async function connectDatabase() {
  const mongoUri = process.env.MONGODB_URI || process.env.MONGODB || process.env.DATABASE_URL || global.mongodb || '';
  if (mongoUri && mongoUri.includes('mongodb')) {
    try {
      mongoose.set('strictQuery', true);
      await mongoose.connect(mongoUri);
      console.log('✅ MongoDB connected successfully!');
      global.isMongodb = true;
    } catch (e) {
      console.error('❌ MongoDB connection failed:', e.message);
    }
  } else {
    console.log('⚠️  No MongoDB URI found, running with JSON storage.');
  }
}

const start = async () => {
  // Fix 3: Ensure SmdOfficial stays 'yes' even if MakeSession tries to override
  global.SmdOfficial = 'yes';
  try {
    await connectDatabase();
    await bot.init();
    // Fix 4: Re-apply SmdOfficial after init (MakeSession runs during init)
    global.SmdOfficial = 'yes';
    bot.logger.info('⏳ Database syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    console.error(error);
    start();
  }
}
start();
