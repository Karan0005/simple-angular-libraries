const { execSync } = require('child_process');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

async function main() {
    const { libraryName } = await inquirer.default.prompt([
        {
            type: 'input',
            name: 'libraryName',
            message: 'Enter the library name:',
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

    // Ask for version type (patch, minor, or major)
    const { versionType } = await inquirer.default.prompt([
        {
            type: 'list',
            name: 'versionType',
            message: 'Select the version upgrade type:',
            choices: ['patch', 'minor', 'major']
        }
    ]);

    try {
        const libraryDir = path.posix.join('projects', libraryName);

        // Update version and build the library
        execSync(
            `cd ${libraryDir} && npm version ${versionType} && ng build --configuration=production`,
            { stdio: 'inherit' }
        );

        // Publish the library
        execSync(`cd dist/${libraryName} && npm publish --access public`, {
            stdio: 'inherit'
        });

        console.log(`${libraryName} build and published successfully.`);
    } catch (error) {
        console.error(`Error building ${libraryName}:`, error.message);
        process.exit(1);
    }
}

main();
