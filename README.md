# PDF Translator Extension

## Overview
The **PDF Translator Extension** is a Chrome extension designed to translate selected text in PDF files. Unlike the Google Translate extension, which may not work effectively with PDFs, this custom solution allows users to quickly translate text by selecting it in a PDF document opened in Chrome.

## Motivation
The motivation behind creating this extension arises from the need for efficient translation capabilities directly within PDF documents. Users often require quick translations while reading PDFs, similar to how they would translate text on a web page using Google Translate. The existing solutions did not meet this requirement, prompting the development of a custom extension.

## Features
- **Select and Translate**: Users can select any text in an open PDF, and the extension will send the selected text for translation.
- **Background Processing**: The extension uses background scripts to handle text selection and communicate with the translation service.

## Technologies Used
- **JavaScript**: For developing the extension's functionality.
- **Chrome Extension APIs**: To leverage Chrome's features for creating extensions.
- **Google Translate API** (to be added in future updates): For translating the selected text.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/pdf-translator-extension.git
   cd pdf-translator-extension
