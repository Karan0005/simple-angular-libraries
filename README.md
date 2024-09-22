# Angular Workspace for Library Development

Welcome to your Angular Workspace, a structured environment for developing, testing, and publishing Angular libraries. This guide will walk you through essential commands and workflows to streamline your library management and ensure a professional development process.

## Prerequisites

Ensure that you have the following installed:

- [Node.js (>= 20.17.0)](https://nodejs.org/en/download/package-manager)

After installing Node.js, you should also globally install the Angular CLI to manage your Angular projects:

```bash
npm install -g @angular/cli@latest
```

## Setup Instructions

1. Clone the repository.
2. Install the project dependencies using the following command:

   ```bash
   npm install
   ```

**Note:** You must install your library dependencies inside your library directory

## Project Structure

The workspace is organized to separate your library development from the distribution-ready builds:

```sh
└── simple-angular-libraries/
    ├── LICENSE
    ├── README.md
    ├── angular.json
    ├── package-lock.json
    ├── package.json
    ├── projects
    │   ├── kg-monaco-editor
    │   ├── your-library
    │   └── testing
    └── tsconfig.json
```

## Commands Overview

Here’s a breakdown of the key npm scripts available in this workspace, designed to assist you through various stages of development, from testing to publishing.

### Build

This command compiles your library with production optimizations. Automatically increments the version in `package.json` (e.g., from `0.0.1` to `0.0.2`). The output is placed in the `dist/your-library` directory, ready for distribution or further testing.

- **Build Patch Version**:

  ```bash
  npm run build-patch:your-library
  ```

  Increments the patch version (e.g., `1.0.0` to `1.0.1`). Patch releases are intended for backward-compatible bug fixes or small improvements.

- **Build Minor Version**:

  ```bash
  npm run build-minor:your-library
  ```

  Increments the minor version (e.g., `1.0.0` to `1.1.0`). Use this for backward-compatible enhancements and new features.

- **Build Major Version**:

  ```bash
  npm run build-major:your-library
  ```

  Increments the major version (e.g., `1.0.0` to `2.0.0`). Use this when making significant changes that are not backward-compatible.

### Development

- **Serve for Testing**:

  ```bash
  npm run start:testing
  ```

  Use this command to start a local development server. It allows you to test your library in real-time, making development more efficient by providing live reloading as you modify your code.

  **Note:** build up your library before start testing using `npm run build:your-library`, Import your library module in app-module and then use your library component selector inside app-component.

### Publishing

Publishing your library involves preparing it for public use by incrementing the version and uploading it to the npm registry.

1. **Authenticate with npm**:

   - The command prompts you to log in to npm with your credentials, ensuring you have the appropriate permissions to publish updates.

2. **Publishing**:
   - Once authenticated and the version is updated, the library is published to the npm registry using `npm publish --access public`, making it publicly available.

## Author Information

- **Author**: Karan Gupta
- **LinkedIn**: [Karan Gupta](https://www.linkedin.com/in/karangupta0005)
- **GitHub**: [Karan Gupta](https://github.com/Karan0005)
- **Contact**: +91-8396919047
- **Email**: [karangupta0005@gmail.com](mailto:karangupta0005@gmail.com)

## Contribution

Contributions are welcome! Here are several ways you can contribute:

1. **Fork the Repository**: Start by forking the project repository to your github account.

2. **Clone Locally**: Clone the forked repository to your local machine using a git client.

   ```sh
   git clone https://github.com/Karan0005/simple-angular-libraries
   ```

3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.

   ```sh
   git checkout -b new-feature-x
   ```

4. **Make Your Changes**: Develop and test your changes locally.

5. **Commit Your Changes**: Commit with a clear message describing your updates.

   ```sh
   git commit -m 'Implemented new feature x.'
   ```

6. **Push to github**: Push the changes to your forked repository.

   ```sh
   git push origin new-feature-x
   ```

7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe
   the changes and their motivations.

8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch.
   Congratulations on your contribution!

- **[Report Issues](https://github.com/Karan0005/simple-angular-libraries/issues)**: Submit bugs
  found or log feature requests for the `simple-angular-libraries` project.

## License

This project is licensed under the MIT License.
