# Holly SDK

Holly SDK is a monorepo-based library designed to help you integrate Holly’s features into your project quickly. This repository provides all the core functionalities and utilities for working with Holly, including API integrations and analysis tools.

## Installation

Follow these steps to install Holly SDK locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/HOLLY-AI-SOL/holly-sdk
   ```

2. **Move the Cloned Repository:**

   ```bash
   mv holly-sdk ./your-workspace/any-directory
   ```

3. **Install Repository Dependencies:**

   ```bash
   npm install
   ```

After these steps, your package is installed locally. You can now import the library manually into your project.  
*(Installation instructions based on the official documentation citeturn0fetch0)*

## Getting Started

Once installed, you can initialize the SDK and start using its features. For example, to use the core `whisper` method (which connects to your backend API for analysis), you might write:

```js
import HollyAISDK from './path/to/holly-sdk/HollyAISDK';

// Initialize the SDK with your API key and the backend base URL
const holly = new HollyAISDK('YOUR_API_KEY', 'http://your-backend-url');

// Use the core whisper method to perform analysis
holly.core.whisper({
  token_address: 'YOUR_TOKEN_ADDRESS',
  network: 'solana',
}).then(result => {
  console.log('Analysis Result:', result);
}).catch(error => {
  console.error('Error calling whisper:', error);
});
```

For more detailed usage examples and API documentation, please refer to our [GitBook Documentation](https://holly-2.gitbook.io/holly).

## Repository Structure

The project is organized as a monorepo, which means you may find multiple packages and tools within this repository. Each package is modular and can be used independently if needed.

## Contributing

Contributions are welcome! If you have suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request. Please follow our contribution guidelines for a smooth review process.
