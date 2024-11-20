# GATE 2025 Countdown App

## Prerequisites
- Node.js and npm installed
- Windows operating system

## Setup and Running

1. Clone the repository
2. Open terminal in the project directory
3. Install dependencies:
   ```
   npm install
   ```

4. Run the application locally:
   ```
   npm start
   ```

## Packaging for Distribution

To create a Windows executable:
```
npm run dist
```

The packaged application will be in the `dist` folder.

## Customization

- Edit the exam date in `renderer.js` if needed
- Modify styling in `style.css`

## Notes
- The app automatically updates the countdown at midnight
- Always on top and fixed window size
