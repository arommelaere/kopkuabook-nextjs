const { execSync } = require('child_process');
const readline = require('readline');
const fs = require('fs');

// Create .env file for Prisma if it doesn't exist
const checkEnvFile = () => {
  if (!fs.existsSync('.env.prisma')) {
    console.log('Creating .env.prisma file...');
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('MySQL username: ', (username) => {
      rl.question('MySQL password: ', (password) => {
        rl.question('MySQL host (default: localhost): ', (host) => {
          rl.question('MySQL port (default: 3306): ', (port) => {
            rl.question('MySQL database name (default: kopkuadb): ', (database) => {
              host = host || 'localhost';
              port = port || '3306';
              database = database || 'kopkuadb';
              
              const envContent = `# MySQL Database URL
DATABASE_URL="mysql://${username}:${password}@${host}:${port}/${database}"`;
              
              fs.writeFileSync('.env.prisma', envContent);
              console.log('.env.prisma file created successfully.');
              
              // Copy the content to .env temporarily for migration
              fs.copyFileSync('.env.prisma', '.env.prisma.temp');
              if (fs.existsSync('.env')) {
                fs.copyFileSync('.env', '.env.backup');
              }
              fs.copyFileSync('.env.prisma', '.env');
              
              rl.close();
              runMigration();
            });
          });
        });
      });
    });
    
    return false;
  }
  
  return true;
};

const runMigration = () => {
  try {
    console.log('Generating Prisma client...');
    execSync('npx prisma generate', { stdio: 'inherit' });
    
    console.log('Creating migration...');
    execSync('npx prisma migrate dev --name init', { stdio: 'inherit' });
    
    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Error during migration:', error.message);
  } finally {
    // Restore original .env if it existed
    if (fs.existsSync('.env.backup')) {
      fs.copyFileSync('.env.backup', '.env');
      fs.unlinkSync('.env.backup');
    } else if (fs.existsSync('.env')) {
      fs.unlinkSync('.env');
    }
    
    // Clean up temp file
    if (fs.existsSync('.env.prisma.temp')) {
      fs.unlinkSync('.env.prisma.temp');
    }
  }
};

// Start the process
if (checkEnvFile()) {
  runMigration();
}
