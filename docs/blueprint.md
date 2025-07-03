# **App Name**: InstaClone

## Core Features:

- Login Form UI: Render a login form identical to the Instagram login screen, with fields for username/email/phone and password.
- Password Visibility: Implement password visibility toggle in the password field.
- Firebase Integration: Utilize provided Firebase configuration to connect to Firebase.
- User Authentication: Validate user credentials against data stored in the Firebase collection, signaling password incorrect to the front-end.
- Error Message Display: Provide an 'Incorrect Password' message as a red warning message to user.
- User Data Persistence: After successful login, save user information to new Firebase collection.

## Style Guidelines:

- Primary color: #2D9CDB (a light sky-blue for a clean and trustworthy feel, Instagram-like).
- Background color: #F5F5F5 (a light gray to maintain a simple, uncluttered interface).
- Accent color: #4CAF50 (a contrasting green color for active states, links, and key CTAs).
- Body and headline font: 'Inter', a grotesque sans-serif for a modern, machined, objective look suitable for login UI elements.
- Note: currently only Google Fonts are supported.
- Use a responsive layout to adapt to different screen sizes.
- Incorporate simple, minimalist icons for elements like the password visibility toggle.