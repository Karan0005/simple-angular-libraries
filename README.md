# Angular Workspace for Library Development

Welcome to your Angular Workspace, a structured environment for developing, testing, and publishing
Angular libraries. This guide will walk you through essential commands and workflows to streamline
your library management and ensure a smooth and professional development process.

## Prerequisites

Make sure you have the following installed:

-   [Node.js (>= 20.17.0)](https://nodejs.org/en/download/package-manager)

After installing Node.js, globally install the Angular CLI to manage your Angular projects:

```bash
npm install -g @angular/cli@latest
```

## Setup Instructions

1. Clone the repository.
2. Install the project dependencies with the following command:

    ```bash
    npm install
    ```

**Note:** Library-specific dependencies must be installed inside each library's directory.

## Project Structure

The workspace is organized to separate library development from distribution-ready builds:

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
    ├── scripts
    │   ├── build.js
    │   └── publish.js
    └── tsconfig.json
```

## Command Overview

Here’s a breakdown of the key npm scripts available in this workspace, designed to assist you at
different stages of development, from testing to publishing.

### Generate a New Library

The following command helps you create a new Angular library within your workspace:

```bash
npm run generate:library
```

This command runs the Angular CLI `ng generate library` with the `--standalone=false` option. It
will prompt you to provide a name for the new library and then scaffold the necessary files and
folder structure, integrating the new library into your workspace.

### Build

This command compiles your library with production optimizations. The output is placed in the
`dist/your-library` directory, ready for distribution or further testing.

```bash
npm run build
```

You will be prompted to specify the correct library name you want to build.

### Test

To start a local development server and test your library in real-time with live reloading, use:

```bash
npm run test
```

**Note:** Before testing, ensure you have built your library using `npm run build`. Import your
library module in `app.module`, and use your library component's selector inside `app.component`.

### Publish

Publishing your library involves versioning and uploading it to the npm registry.

```bash
npm run publish
```

This command will prompt you to specify the correct library name for publishing and the type of
version increment. Below is a high-level overview of version increments:

-   **Patch Version**: For backward-compatible bug fixes or small improvements (e.g., `1.0.0` to
    `1.0.1`).

-   **Minor Version**: For backward-compatible enhancements or new features (e.g., `1.0.0` to
    `1.1.0`).

-   **Major Version**: For significant changes that are not backward-compatible (e.g., `1.0.0` to
    `2.0.0`).

The publishing process performs the following steps:

1. **Authenticate with npm**: The command will prompt you to log in to npm, ensuring you have the
   appropriate permissions.

2. **Publish**: Once authenticated, the library is published to npm using
   `npm publish --access public`, making it publicly available.

## Author Information

-   **Author**: Karan Gupta
-   **LinkedIn**: [Karan Gupta](https://www.linkedin.com/in/karangupta0005)
-   **GitHub**: [Karan Gupta](https://github.com/Karan0005)
-   **Contact**: +91-8396919047
-   **Email**: [karangupta0005@gmail.com](mailto:karangupta0005@gmail.com)

## Contribution Guidelines

Contributions are welcome! Here’s how you can contribute:

1. **Fork the Repository**: Start by forking the project to your GitHub account.

2. **Clone Locally**: Clone the forked repository to your local machine.

    ```bash
    git clone https://github.com/Karan0005/simple-angular-libraries
    ```

3. **Create a New Branch**: Create a new branch for your changes with a descriptive name.

    ```bash
    git checkout -b new-feature-x
    ```

4. **Make Your Changes**: Develop and test your changes locally.

5. **Commit Your Changes**: Commit with a clear message describing your updates.

    ```bash
    git commit -m 'Implemented new feature x.'
    ```

6. **Push to GitHub**: Push the changes to your forked repository.

    ```bash
    git push origin new-feature-x
    ```

7. **Submit a Pull Request**: Create a PR against the original repository. Clearly describe the
   changes and their purpose.

8. **Review**: Once your PR is reviewed and approved, it will be merged. Thank you for your
   contribution!

For reporting issues, visit the
[Issues Page](https://github.com/Karan0005/simple-angular-libraries/issues).

## License

This project is licensed under the MIT License.
