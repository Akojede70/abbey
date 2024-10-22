
## Project Overview: Social Media Application

## Description
This project was developed as part of the Abbey Full stack Interview Test. It is a fully responsive social media platform where users can follow and unfollow each other and view profiles. The application is built using React, Node.js, TypeScript, and Tailwind CSS, with PostgreSQL as the database. It showcases clean UI design and seamless user interactions across devices.

## Key Features

1. Follow/Unfollow Users: Real-time follow/unfollow functionality with dynamic button updates.

2. View Profiles: Access detailed user profiles including name, username, and picture.

3. Responsive Design: Optimized for various screen sizes using Tailwind CSS.

4. Modern Tech Stack: Built with React for the frontend, Node.js for the backend, TypeScript for strong typing, and PostgreSQL for data management.

## Branching Strategy
The project uses a structured branching model to ensure smooth development and deployment:

main: This is the main branch containing the stable code that is ready for production. commits were first made here, and along the line I eventually create a development branch and then merge then merge the development into main.

development: This is the integration branch where features and bug fixes are merged after they have been tested. Once code was stable here, it was merged into main.

production: The branch that was used for the live production environment. It reflects the code that was currently deployed. Merges to this branch typically happen from main.

feature/branch-name: All new features and bug fixes were developed in separate feature branches. Feature branches was named clearly, e.g., feature/endpoint-integration, feature/landing-design and for bug fixes will be this naming convention for future bugfix/fix-nav-issue. Once a feature was complete, it was merged into development and then merged into main.

### Here is the Link to the Figma Design

There is no figma design, created the design myself



### Here is the Deployed Link 

https://abbey-screening.netlify.app/