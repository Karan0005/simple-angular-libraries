const { execSync } = require('child_process');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

async function main() {
    const { libraryName } = await inquirer.default.prompt([
        {
            type: 'input',
            name: 'libraryName',
            message: 'Enter the library name to build:',
            validate: (input) => {
                const libraryPath = path.posix.join('projects', input);

                if (!fs.existsSync(libraryPath)) {
                    return 'Library does not exist. Please enter a valid library name.';
                }
                if (input === 'testing') {
                    return 'This app is excluded from the build process.';
                }

                return true;
            }
        }
    ]);

    try {
        const libraryDir = path.posix.join('projects', libraryName);

        // Update version and build the library
        execSync(`cd ${libraryDir} && ng build --configuration=production`, { stdio: 'inherit' });

        console.log(`${libraryName} build successfully.`);
    } catch (error) {
        console.error(`Error building ${libraryName}:`, error.message);
        process.exit(1);
    }
}

main();
