# React + Vite

 minimal setup to get React working in Vite with HMR and some ESLint rules.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Overview

This project is a dynamic and interactive cricket-themed website developed by our team using React (with Vite for fast development), Tailwind CSS for styling, and GSAP for animations. The website features responsive layouts, animated elements, and cricket-related content like tournaments, registration forms, and more. It is designed to work smoothly across all devices.

# Features

  
- React with Vite: Fast and optimized development environment using Vite as the bundler and build tool.
- Animations: Smooth animations throughout the site, powered by GSAP (GreenSock Animation Platform).
- Tailwind CSS: Responsive and customizable styles using utility-first CSS.
- Multi-Stage Registration Form: Users can register for cricket tournaments via a dynamic, multi-step form.
- Tournament Pages: Displays ongoing, upcoming, and past cricket tournaments.
- Responsive Design: Ensures seamless experience across all devices.
- Custom Footer with Animations: Includes navigation links and callouts, animated with GSAP.

# Technologies Used

  
- React (with Vite)
- Tailwind CSS
- GSAP
- React Router


# Installation and Setup

  # Prerequisites
  
  Make sure you have the following installed on your machine:

- Node.js (Version 14 or higher recommended)
- npm (or yarn) as the package manager
- Git (optional, but recommended for version control)
- A code editor (e.g., VS Code, IntelliJ IDEA)
- A web browser (Google Chrome is recommended)
- gsap


# Steps

  
  # 1. Clone the repository:
   
     git clone https://github.com/ShrutiSangwan07/XYZ-Organization.git
  
     cd XYZ-Organization
  
  # 2. Install dependencies: 
   
     If you're using npm:

      npm install

     Or, if you're using yarn:

      yarn install
  
# 3. Install GSAP:  

    If GSAP is not already installed, add it to the project:

     npm install gsap
 
 # 4. Run the Development Server

    Start the development server using Vite:

    npm run dev
    
   #The development server will start at http://localhost:5173/, and you can view the website in your browser.

# 5. Building for Production

   To create an optimized production build, run:
   
    npm run build
   
    #This will output the production files into the dist/ folder, which can be deployed to any web hosting service.

# Usage

  - Home Page: Displays general cricket-related information and links to other sections.
  
  - About Us: Cricket-themed 'About Us' page with animations using GSAP.
  
  - Tournament Page: A dynamic page that lists ongoing, upcoming, and past tournaments. Users can switch between categories via a side navigation bar.
  
  - Registration Form: A multi-stage form for tournament registration.

# Tailwind CSS Integration
   
   Tailwind CSS is used for all the styling in this project, ensuring a utility-first approach to design. You can easily modify the design by tweaking the utility classes in the JSX files.

# How to Customize Tailwind CSS
  
  - Edit Tailwind Config:
      Tailwind can be customized by editing the tailwind.config.js file. You can add custom colors, fonts, and breakpoints.
  - Add Custom Styles:
      While Tailwind’s utility classes cover most needs, you can also create custom styles in src/index.css and apply them to your components.


# Deployment Instructions
  
# Netlify
  - Login to Netlify and create a new site from the Git repository.
  - Select the repository, and configure build settings:
     # Build command:
        npm run build
     # Publish directory:
        dist/
  - Deploy the site.
  
# Vercel
  - Login to Vercel and create a new project.
  - Select your Git repository, and configure the project.
    # Set the build command to
        npm run build
    and
    # output directory to:
        dist/.
  - Deploy the site.
  
# AWS S3 (Static Site Hosting)
  # Build the Project:
     npm run build
  - Upload to S3:
    
    - Log in to AWS and navigate to the S3 console.
      
    - Create a new S3 bucket (or use an existing one).
      
    - Upload the contents of the dist/ folder to the bucket.
      
    - Enable static website hosting under the bucket’s properties.
      
  - Set Permissions:
    - Go to the bucket permissions and make the content publicly accessible.
  - Access Your Site:
    -You can now access the website via the S3 bucket URL.

  # Contact
   For questions, feedback, or collaboration, feel free to reach out:
  - Team Members

    This project was collaboratively developed by:

    # Member 1 – Shruti
    
      mail: shrutisangwan199@gmail.com
    
      Linkedin:https://www.linkedin.com/in/shruti-6331a6211/
    
      portfolio:https://shruti513.wordpress.com/

      https://shrutisangwan07.github.io/Portfolio-Website/

    # Member 2 – Deepak Tiwari [CODEING-BROS](https://github.com/CODEING-BROS)
    
      mail: deepakcoder2023@gmail.com
    
      linkedin https://www.linkedin.com/in/dev-deepaktiwari/
    
      portfolio: https://codewithshaka.netlify.app/
 
      Follow on Instagram: [@coding.shaka] https://www.instagram.com/coding.shaka?igsh=ODd4MWM1NGhrbjA3



# Overview
This project is a dynamic and interactive cricket-themed website developed by our team using React (with Vite for fast development), Tailwind CSS for styling, and GSAP for animations. The website features responsive layouts, animated elements, and cricket-related content like tournaments, registration forms, and more. It is designed to work smoothly across all devices.

# Features
- React with Vite: Fast and optimized development environment using Vite as the bundler and build tool.
- Animations: Smooth animations throughout the site, powered by GSAP (GreenSock Animation Platform).
- Tailwind CSS: Responsive and customizable styles using utility-first CSS.
- Multi-Stage Registration Form: Users can register for cricket tournaments via a dynamic, multi-step form.
- Tournament Pages: Displays ongoing, upcoming, and past cricket tournaments.
- Responsive Design: Ensures seamless experience across all devices.
- Custom Footer with Animations: Includes navigation links and callouts, animated with GSAP.
# Technologies Used
- React (with Vite)
- Tailwind CSS
- GSAP
- React Router
# Installation and Setup
# Prerequisites
Make sure you have the following installed on your machine:

- Node.js (Version 14 or higher recommended)
- npm (or yarn) as the package manager
- Git (optional, but recommended for version control)
- A code editor (e.g., VS Code, IntelliJ IDEA)
- A web browser (Google Chrome is recommended)
- gsap
# Steps
1. Clone the repository:
 # git clone
        https://github.com/ShrutiSangwan07/XYZ-Organization.git

        cd XYZ-Organization
2. Install dependencies:
  # If you're using npm:

        npm install

 Or, 
  # if you're using yarn:

        yarn install
3. Install GSAP:
# If GSAP is not already installed, add it to the project:

        npm install gsap
4. Run the Development Server
# Start the development server using Vite:

        npm run dev
#The development server will start at http://localhost:5173/, and you can view the website in your browser.

5. Building for Production
# To create an optimized production build, run:

        npm run build

#This will output the production files into the dist/ folder, which can be deployed to any web hosting service.
# Usage
- Home Page: Displays general cricket-related information and links to other sections.

- About Us: Cricket-themed 'About Us' page with animations using GSAP.

- Tournament Page: A dynamic page that lists ongoing, upcoming, and past tournaments. Users can switch between categories via a side navigation bar.

- Registration Form: A multi-stage form for tournament registration.

# Tailwind CSS Integration
Tailwind CSS is used for all the styling in this project, ensuring a utility-first approach to design. You can easily modify the design by tweaking the utility classes in the JSX files.

# How to Customize Tailwind CSS
Edit Tailwind Config: Tailwind can be customized by editing the tailwind.config.js file. You can add custom colors, fonts, and breakpoints.
Add Custom Styles: While Tailwind’s utility classes cover most needs, you can also create custom styles in src/index.css and apply them to your components.

# Deployment Instructions
To deploy the application, follow these steps:
# Netlify
- Login to Netlify and create a new site from the Git repository.
- Select the repository, and configure build settings:
- Build command:
npm run build
- Publish directory:
dist/
- Deploy the site.
# Vercel
- Login to Vercel and create a new project.
- Select your Git repository, and configure the project.
- Set the build command to
npm run build
and
- output directory to:
dist/.
- Deploy the site.
# AWS S3 (Static Site Hosting)
- Build the Project:
 npm run build
- Upload to S3:

- Log in to AWS and navigate to the S3 console.

- Create a new S3 bucket (or use an existing one).

- Upload the contents of the dist/ folder to the bucket.

- Enable static website hosting under the bucket’s properties.

- Set Permissions:

- Go to the bucket permissions and make the content publicly accessible.
- Access Your Site: -You can now access the website via the S3 bucket URL.

# Contact
For questions, feedback, or collaboration, feel free to reach out:

# Team Members

This project was collaboratively developed by:

# Member 1 – Shruti
 mail: shrutisangwan199@gmail.com

 Linkedin:https://www.linkedin.com/in/shruti-6331a6211/

 portfolio:https://shruti513.wordpress.com/

 https://shrutisangwan07.github.io/Portfolio-Website/

# Member 2 – Deepak Tiwari CODEING-BROS
 mail: deepakcoder2023@gmail.com

 linkedin https://www.linkedin.com/in/dev-deepaktiwari/

 portfolio: https://codewithshaka.netlify.app/

 Follow on Instagram: [@coding.shaka] https://www.instagram.com/coding.shaka?igsh=ODd4MWM1NGhrbjA3
