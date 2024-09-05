
# Ministry of Finance Management Platform

This is a comprehensive management platform developed for the Ministry of Finance of the Province of Córdoba. The platform is designed to manage user accounts representing government employees, create groups from these accounts, and register visits to various localities. It offers detailed statistics and analysis of these visits, helping streamline operations and improve decision-making processes for the Ministry.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Lessons Learned](#Lessons)


## Introduction

This platform was developed to support the Ministry of Finance of Córdoba in managing its employees and tracking their activities across various localities. By providing a centralized system to register visits and generate detailed reports, the platform assists in making data-driven decisions and optimizing operational efficiency.

## Features

- **User Account Management**: Create and manage user accounts for government employees.
- **Group Creation**: Organize employees into groups for easier management.
- **Visit Registration**: Record visits to various localities and track details related to these visits.
- **Statistics and Analytics**: Generate detailed reports on visits and other activities, offering insights to improve operational strategies.
- **Streamlined Operations**: Helps the Ministry streamline administrative tasks and improve decision-making.

## Installation

To install the platform locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/LautaroVelez/financiation.git
   cd financiation
2. Install the dependencies
   ```bash
   pip install -r requirements.txt
   cd financiation-react
   npm install
3. Run the backend
    ```bash
    cd financiation/financiationDjango
    python3 manage.py runserver
4. In other terminal, run the front-end
    ```bash
    cd financiation/financiation-react
    npm start
## Lessons Learned

- Frontend-Backend Communication: Coordinating the communication between the Django backend and the React frontend posed some challenges. Managing API requests efficiently and ensuring data synchronization between the two systems helped improve user experience.

- Data Analytics: Implementing detailed statistics and reports from the registered visits required working with large datasets. I learned how to efficiently aggregate data and present it in a user-friendly format, leveraging visualization libraries and optimizing the calculation of statistics.

- User Experience: Ensuring the platform was intuitive and easy to use for non-technical users, such as government employees, was a key focus. I spent time refining the UI/UX and simplifying complex workflows, which helped improve user adoption and satisfaction.

Overcoming these challenges helped me sharpen my problem-solving skills and gain confidence in handling both technical and user experience issues.


https://financiation2.onrender.com/
