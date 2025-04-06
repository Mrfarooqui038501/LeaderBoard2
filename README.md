# Leaderboard Application

## Overview
This is a React.js-based leaderboard application designed to display user rankings based on points. The application features a sticky top 3 ranks section and a paginated list for ranks 4–100, with 20 ranks per page. The UI is styled using Bootstrap and custom CSS, ensuring responsiveness across desktop and mobile browsers. The design is inspired by a provided screenshot, mimicking a weekly contribution ranking interface.

## Features
- **Top 3 Ranks**: Fixed and always visible at the top, highlighted with distinct styling (e.g., gold, silver, bronze backgrounds).
- **Paginated List**: Displays ranks 4–100 with 20 users per page, navigable via pagination controls.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Data-Driven**: User data is loaded from a JSON file (`users.json`) containing 100 users with ranks, names, points, and avatar placeholders.
- **Styling**: Utilizes Bootstrap for base styling and custom CSS in `App.css` for a pixel-perfect match to the reference design.

## Prerequisites
- Node.js (version 14.x or higher)
- npm (comes with Node.js)

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Mrfarooqui038501/LeaderBoard2.git
   cd leaderboard
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Add Avatars**:
   - Create a folder named `images` inside the `public/` directory.
   - Add placeholder images named `avatar1.jpg` through `avatar100.jpg`. You can generate these using an online avatar tool (e.g., https://getavataaars.com/) or use images from the reference screenshot.

4. **Start the Application**:
   ```bash
   npm start
   ```
   This will run the app in development mode. Open http://localhost:3000 to view it in your browser.

## Usage
- The application loads 100 users from `src/data/users.json`.
- The top 3 ranks are displayed in a sticky header with larger avatars and colored backgrounds.
- The remaining ranks (4–100) are paginated, with navigation buttons to move between pages.
- Use the pagination controls (< and >) to navigate through the list of ranks.

## File Structure
```
leaderboard/
├── public/
│   ├── index.html
│   ├── images/ (contains avatar1.jpg to avatar100.jpg)
├── src/
│   ├── components/
│   │   ├── TopRanks.js (displays top 3 ranks)
│   │   ├── RankList.js (displays paginated ranks 4–100)
│   │   ├── Pagination.js (handles pagination logic)
│   ├── data/
│   │   ├── users.json (contains 100 user records)
│   ├── App.js (main application component)
│   ├── App.css (centralized styling)
│   ├── index.js (entry point)
├── package.json (project dependencies and scripts)
├── README.md (this file)
```

## Functionality
- **TopRanks Component**: Renders the top 3 users with their rank, name, points, and avatar. These are sticky and remain visible while scrolling.
- **RankList Component**: Displays a paginated list of users from rank 4 onwards, with 20 users per page.
- **Pagination Component**: Provides navigation buttons to switch between pages, with active page highlighting and disabled states for first/last pages.
- **State Management**: Uses React's useState hook to manage the current page and update the displayed ranks accordingly.
- **Responsive Layout**: Media queries in App.css adjust the layout for mobile devices (e.g., stacking items vertically).

## Styling
- **Bootstrap**: Provides base styling for responsiveness and layout.
- **Custom CSS**: Defined in App.css, it includes:
  - Orange background (#f8a31d) for the top ranks section.
  - Gold (#ffd700), silver (#c0c0c0), and default styling for top 3 ranks.
  - Responsive adjustments for avatars, text, and pagination buttons on mobile screens.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details (if applicable).

## Contact
For questions or support, please open an issue on the GitHub repository or contact the developer at your-email@example.com.

## Acknowledgments
- Inspired by the reference screenshot provided.
- Built using React.js, Bootstrap, and custom CSS.
- Thanks to the open-source community for tools and libraries.