API Documentation for Food Delivery Application


1. User Authentication APIs
POST /api/users/signup

Description: Register a new user.
Request Body: { firstName, lastName, emailId, password }
Response: Success message or error message.
Why: To allow users to create an account and access the application.
POST /api/users/login

Description: Authenticate a user and return a JWT token.
Request Body: { emailId, password }
Response: JWT token and user details or error message.
Why: To allow users to log in and access protected resources.
POST /api/users/logout

Description: Log out the user by clearing the JWT token.
Response: Success message.
Why: To allow users to securely log out of their session.


2. User Profile APIs
GET /api/users/profile

Description: Retrieve the authenticated user's profile information.
Response: User profile data (excluding sensitive information).
Why: To allow users to view their profile information.
PUT /api/users/profile

Description: Update the authenticated user's profile information.
Request Body: { firstName, lastName, emailId }
Response: Updated user profile data or error message.
Why: To allow users to update their personal information.


3. Restaurant APIs
-GET /api/restaurants

Description: Retrieve a list of all restaurants.
Response: Array of restaurant objects.
Why: To allow users to browse available restaurants.

-GET /api/restaurants/:id

Description: Retrieve details of a specific restaurant.
Response: Restaurant object with details (menu, ratings, etc.).
Why: To allow users to view detailed information about a specific restaurant.

-POST /api/restaurants

Description: Add a new restaurant (admin only).
Request Body: { name, location, menu, etc. }
Response: Success message or error message.
Why: To allow admins to add new restaurants to the platform.

-PUT /api/restaurants/:id

Description: Update restaurant details (admin only).
Request Body: { name, location, menu, etc. }
Response: Updated restaurant object or error message.
Why: To allow admins to update existing restaurant information.

-DELETE /api/restaurants/:id

Description: Remove a restaurant from the platform (admin only).
Response: Success message or error message.
Why: To allow admins to manage the list of restaurants.


4. Menu Item APIs
GET /api/restaurants/:id/menu

Description: Retrieve the menu for a specific restaurant.
Response: Array of menu items.
Why: To allow users to view available food items at a restaurant.
POST /api/restaurants/:id/menu

Description: Add a new menu item to a restaurant (admin only).
Request Body: { name, description, price, etc. }
Response: Success message or error message.
Why: To allow admins to manage the menu items of a restaurant.
PUT /api/restaurants/:id/menu/:itemId

Description: Update a menu item (admin only).
Request Body: { name, description, price, etc. }
Response: Updated menu item or error message.
Why: To allow admins to update existing menu items.
DELETE /api/restaurants/:id/menu/:itemId

Description: Remove a menu item from a restaurant (admin only).
Response: Success message or error message.
Why: To allow admins to manage menu items.


5. Order APIs
POST /api/orders
Description: Create a new order.
Request Body: { userId, restaurantId, items, totalAmount }
Response: Order confirmation details or error message.