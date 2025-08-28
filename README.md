# Personal Website

This repository contains the source code for my personal website. The site serves as a hub to showcase my projects, skills, and professional journey. Built with Angular and styled using Tailwind CSS, the website is designed to be fast, responsive, and visually appealing.

## Features

- **Project Showcase**: Highlights various projects with descriptions, technologies used, and links to live demos or source code (if available).
- **Responsive Design**: Optimized for viewing on devices of all sizes.
- **Modern Tech Stack**: Built with Angular, Tailwind CSS, and Docker for containerized deployment.
- **Server-Side Rendering**: Utilizes Angular's newer server-side rendering features for improved SEO and performance.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v20.19.0 or higher, required by Angular 20)
- [Angular CLI](https://angular.dev/tools/cli)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chutch1122/personal-site.git
   cd personal-sit
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the development server:
```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The app will automatically reload if you make changes to the source files.

### Building for Production

To create a production build:
```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

### Running with Docker

1. Build the Docker image:
   ```bash
   docker build -t personal-portfolio .
   ```
2. Run the container:
   ```bash
   docker run -p 8080:80 personal-portfolio
   ```
3. Open `http://localhost:8080/` in your browser.

## Testing

### Unit Tests

Run unit tests with Karma:
```bash
ng test
```

### End-to-End Tests

Run e2e tests (if configured):
```bash
ng e2e
```

## Folder Structure

- **src/app**: Contains the Angular components, services, and routing configuration.
- **src/assets**: Static assets like images and icons.
- **public**: Publicly accessible files, including the favicon and logos.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the GNU Affero General Public License v3.0. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, create an issue or find me on social media.
