# URL Shortener Service

This project is a simple URL shortening service using the `short.io` API. It provides a basic Node.js script to shorten URLs.

## Features

- Shorten URLs using `short.io` API.
- Easy to use with environment variables for API keys.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- An API key from [short.io](https://short.io).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adanzweig/nodejs-shortio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd nodejs-shortio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your `short.io` API key:
   ```env
   API_KEY=your_api_key_here
   ```

### Usage

Run the script with Node.js:
```bash
node index.js
```

## Configuration

The script can be configured with the following environment variables:
- `API_KEY`: Your `short.io` API key (required).

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)