# New Portfolio

[![Tests](https://github.com/WillFelisberto/new-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/WillFelisberto/new-portfolio/actions/workflows/ci.yml)
[![Storybook](https://img.shields.io/badge/Storybook-deployed-blue)](http://your-storybook-url)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-16%2B-brightgreen.svg)](https://nodejs.org/)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

Welcome to the repository for my personal portfolio project! This portfolio serves as a showcase of my professional work, projects, and skills as a developer.

## Table of Contents

- [New Portfolio](#new-portfolio)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Environment Variables](#environment-variables)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Payload CMS Documentation](#payload-cms-documentation)
    - [Features](#features-1)
    - [Configuration](#configuration)
  - [Usage](#usage)
    - [Storybook](#storybook)
  - [Contributing](#contributing)
  - [License](#license)

## About the Project

This portfolio is designed to provide a sleek and modern interface to highlight my skills, experiences, and completed projects. It is built with a focus on responsiveness and accessibility, ensuring it looks great on any device.

## Features

- Responsive design for seamless viewing on desktops, tablets, and mobile devices.
- Dynamic project gallery showcasing my latest work.
- About me section with a professional biography.
- Contact form to reach out directly.
- Integration with GitHub and LinkedIn for easy access to my profiles.

## Technologies Used

- **Frontend:** NextJs
- **Deployment:** Vercel

## Environment Variables

This project uses the following environment variables:

- `PAYLOAD_SECRET`: Secret key for payload operations.
- `DATABASE_URI`: URI for the database connection.
- `WEBHOOK_URL`: URL for webhook integrations.
- `NODE_ENV`: Environment mode (e.g., `development` or `production`).
- `PAYLOAD_CONFIG_PATH`: Path to the payload configuration file.
- `BLOB_READ_WRITE_TOKEN`: Token for read/write access to storage.
- `SMTP_HOST`: Hostname for the SMTP server.
- `SMTP_USER`: Username for the SMTP server.
- `SMTP_PASS`: Password for the SMTP server.
- `SMTP_PORT`: Port number for the SMTP server.

Ensure you have these variables set in your `.env` file before running the project.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (https://nodejs.org/)
- npm or yarn (comes with Node.js installation)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/WillFelisberto/new-portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd new-portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Payload CMS Documentation

This project integrates with Payload CMS for content management. Below are the key features and configurations for using Payload CMS in this repository:

### Features

- **Customizable Admin Panel:** The admin panel is fully configurable to match the project’s requirements.
- **Rich Text Editor:** Leverages Lexical for a seamless content editing experience.
- **REST API:** Payload provides an out-of-the-box REST API for accessing your data.
- **GraphQL Support:** Optionally enabled for flexible querying.
- **File Storage:** Uses `@payloadcms/storage-vercel-blob` for handling uploads efficiently.

### Configuration

1. **Payload Config File:** The configuration file is located at the path specified by the `PAYLOAD_CONFIG_PATH` environment variable.
2. **Database:** Connects to a MongoDB database via the `DATABASE_URI` variable.
3. **Email Handling:** Configured using `@payloadcms/email-nodemailer` with SMTP settings.

Visit `http://localhost:3000/admin` to access the admin panel.

For more details, visit the [Payload CMS Documentation](https://payloadcms.com/docs).

## Usage

Explore the portfolio by:

- Navigating through the sections to learn more about me.
- Viewing detailed descriptions and links for featured projects.
- Using the contact form to send a message directly.

### Storybook

This project includes a Storybook environment for component development and documentation. To start the Storybook server, run:

```bash
npm run storybook
```

Visit `http://localhost:6006` to explore the Storybook interface.

## Contributing

Contributions are welcome! If you have suggestions for improvements or encounter any issues, feel free to create an issue or submit a pull request.

To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add Some Feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

Thank you for checking out my portfolio repository!
