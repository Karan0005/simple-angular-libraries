# kg-monaco-editor

[![npm version](https://badge.fury.io/js/kg-monaco-editor.svg)](https://www.npmjs.com/package/kg-monaco-editor)
[![License](https://img.shields.io/npm/l/kg-monaco-editor.svg)](https://www.npmjs.com/package/kg-monaco-editor)
[![Downloads](https://img.shields.io/npm/dt/kg-monaco-editor.svg)](https://www.npmjs.com/package/kg-monaco-editor)

`kg-monaco-editor` is an Angular library designed to simplify the integration of the powerful Monaco Editor into your Angular applications. This library abstracts the complexity of setting up and configuring Monaco Editor, providing a seamless experience for developers.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Configuration](#configuration)
- [Events](#events)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Easy Integration**: Quickly add Monaco Editor to your Angular applications with minimal setup.
- **Simplified Configuration**: Avoid the complexities of configuring Monaco Editor by using sensible defaults.
- **Customizable**: Tailor the editor to fit your application's needs with flexible configuration options.
- **Event Handling**: Easily manage editor events such as value changes, cursor movements, and more.
- **Lightweight**: Built as a lightweight wrapper, `kg-monaco-editor` ensures your app remains performant.

## Installation

To start using `kg-monaco-editor` in your Angular project, install it via npm:

```bash
npm install kg-monaco-editor --save
```

## Getting Started

After installation, you can integrate `kg-monaco-editor` into your Angular application with a few simple steps.

1. **Import the Module**: Import `KgMonacoEditorModule` in the module where you want to use the Monaco Editor.

   ```typescript
   import { NgModule } from "@angular/core";
   import { BrowserModule } from "@angular/platform-browser";
   import { AppComponent } from "./app.component";
   import { KgMonacoEditorModule } from "kg-monaco-editor";

   @NgModule({
     declarations: [AppComponent],
     imports: [BrowserModule, KgMonacoEditorModule],
     bootstrap: [AppComponent],
   })
   export class AppModule {}
   ```

2. **Use the Component**: Use the `<kg-monaco-editor></kg-monaco-editor>` component in your template to embed the Monaco Editor.

   ```html
   <!-- app.component.html -->
   <kg-monaco-editor></kg-monaco-editor>
   ```

That's it! The Monaco Editor is now part of your Angular application.

## Usage

The `kg-monaco-editor` component can be easily customized and configured to fit various use cases. Below is a basic usage example:

```html
<kg-monaco-editor
  [language]="'typescript'"
  [theme]="'vs-dark'"
  [value]="'console.log(\"Hello, Monaco!\");'"
  (editorInit)="onEditorInit($event)"
  (editorContentChange)="onContentChange($event)">
</kg-monaco-editor>
```

### Configuration

`kg-monaco-editor` provides several inputs for customizing the editor:

- **`[language]`**: Specifies the language mode of the editor. E.g., `'typescript'`, `'javascript'`, `'cpp'`.
- **`[theme]`**: Defines the editor theme. Available options include `'vs-dark'`, `'vs-light'`, etc.
- **`[value]`**: Sets the initial content of the editor.
- **`[options]`**: Passes additional Monaco Editor configuration options.

### Events

`kg-monaco-editor` emits various events to help you manage interactions:

- **`(editorInit)`**: Fired when the editor is initialized, providing access to the editor instance.
- **`(editorContentChange)`**: Fired when the content of the editor changes, useful for capturing live updates.

### Example: Capturing Editor Events

```typescript
export class AppComponent {
  onEditorInit(editorInstance: any) {
    console.log("Editor initialized:", editorInstance);
  }

  onContentChange(newValue: string) {
    console.log("Editor content changed:", newValue);
  }
}
```

### Customization

You can further customize the editor by passing an `options` object to the component:

```html
<kg-monaco-editor
  [options]="{
    fontSize: 14,
    minimap: { enabled: false },
    automaticLayout: true
  }"
>
</kg-monaco-editor>
```

This allows you to modify the editor's behavior and appearance to suit your application's requirements.

## Author Information

- **Author**: Karan Gupta
- **LinkedIn**: [Karan Gupta](https://www.linkedin.com/in/karangupta0005)
- **GitHub**: [Karan Gupta](https://github.com/Karan0005)
- **Contact**: +91-8396919047
- **Email**: [karangupta0005@gmail.com](mailto:karangupta0005@gmail.com)

## Contributing

Contributions to `kg-monaco-editor` are welcome! If you find a bug or have an idea for a new feature, feel free to open an issue or submit a pull request. Please make sure to follow the contribution guidelines outlined in the repository.

## License

This project is licensed under the MIT License.
