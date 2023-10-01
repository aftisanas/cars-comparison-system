## Car Comparison System

This is a web application that allows users to compare different models and features of cars. Users can also update their personal data, delete their account, print PDF reports, and give feedback on the comparison results. The application also has an admin dashboard that can manage the cars, feedback, and enquiries data.

## Features

- Authentication: Users can register, login, and logout using their email and password. Users can also update their name, email, and password, or delete their account from the profile page.
- Comparison: Users can select two cars from the database and compare them on various criteria such as price, performance, fuel efficiency, safety, reliability, and more. Users can also print the comparison result as a PDF file, clear the comparison data, and give feedback on the comparison result.
- Enquiry: Users can send enquiries to the admin using a form on the contact page. Users can also view the status and reply of their enquiries on the enquiry page.
- Admin Dashboard: The admin can login using a predefined email and password. The admin can view, add, edit, and delete the cars data from the cars page. The admin can also view, reply, and delete the feedback and enquiries data from the feedback and enquiries pages.
- Other Pages: The application also has an about page that introduces the purpose and mission of the application, and a FAQ page that answers some common questions from the users.

## Technologies

- Front-end: The application uses React as the front-end framework, and Tailwind CSS as the styling library. The application also uses Inertia.js as a library that lets you quickly build modern single-page React apps using classic server-side routing and controllers.
- Back-end: The application uses Laravel as the web framework, and MySQL as the database. Laravel is a PHP framework that provides a robust set of tools and features for web development. MySQL is a relational database management system that stores and manages the data for the application.

## Installation

To run this application locally, you need to have Node.js, MongoDB, and npm installed on your machine. Then follow these steps:

1. Clone this repository to your local machine using git clone [clone-the-project](https://github.com/yourusername/car-comparison-system.git).

2. Navigate to the project directory using **cd car-comparison-system**.

3. Install the PHP dependencies using **composer install**.

4. Copy the **.env.example** file to **.env** and fill in your database credentials and other settings.

5. Generate an application key using **php artisan key:generate**.

6. Run migrations with **php artisan migrate --seed**

7. Install the dependencies using **npm install**.

8. Run the web scraper script using **php db/db.php** to populate the database with cars data.

9. Compile the assets using **npm run dev**.

10. Run the application using **php artisan serve**.

11. Open your browser and go to **http://localhost:8000** to see the application.

## License

This project is open-sourced