# Stimulsoft Angular Library

## Introduction

This is an Angular library that integrates Stimulsoft Viewer and Stimulsoft Designer into your application. It allows you to view and edit reports using Stimulsoft within an Angular environment.

## Installation

Before using the library, install the required packages:

```sh
npm install stimulsoft-viewer-angular stimulsoft-designer-angular
```

## Usage

### 1. Configure Component

Define the required variables in your component:

```typescript
export class YourComponent {
    viewerUrl =
        'https://your-domain.com/StimulSoftNetCore/Viewer/filename=your-report.mrt';
    designerUrl = 'https://your-domain.com/StimulSoftNetCore/api/designer';
}
```

In the `viewerUrl`, replace `your-report.mrt` with the actual name of your report file. This file should be a **Stimulsoft Report Template (.mrt)** that contains the report structure and data configuration.

### 2. Add to Template

Use the library in your Angular template:

```html
<lib-stimulsoft
    [viewerUrl]="viewerUrl"
    [designerUrl]="designerUrl"
></lib-stimulsoft>
```

## Feedback & Issues

If you encounter any issues or have suggestions for improvements, please create an issue on GitHub or contact the development team.

## License

MIT
