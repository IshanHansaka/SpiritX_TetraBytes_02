# 🚀 Spirit11 - Fantasy Cricket League

## Overview

Spirit11 is a fantasy cricket league where users can build their dream teams using real university players, analyze statistics, and compete on the leaderboard. Users manage player selections within a set budget and receive AI-powered assistance from the Spiriter Chatbot to optimize their teams.

## Tech Stack

### **Frontend**
- **Next.js** (React-based framework)
- **Tailwind CSS** (for styling)
- **Axios** (for API calls)

### **Backend**
- **Node.js + Express.js**
- **MongoDB Atlas** (Cloud Database)
- **Bcrypt.js** (for password hashing)
- **JSON Web Tokens (JWT)** (for authentication)

### **Backend**
- **MongoDB Atlas**

### **AI Chatbot**
- **Gemini AI**

## Features
## Admin Panel
- Manage player data and statistics
- CRUD operations for player entries (new players only)
- Real-time updates for player stats and system logic
- Tournament summary and overall analytics
- Secure admin authentication

## User Interface
- User authentication (Sign Up / Log In)
- View available players with detailed statistics
- Select and manage teams within a budget of Rs. 9,000,000
- Track budget and manage selected players
- Leaderboard displaying user rankings
- Fully responsive design with real-time updates

## AI Chatbot (Spiriter)
- Provides insights into player statistics
- Suggests the best possible team based on performance data
- Handles queries about player details
- Ensures no unauthorized data leaks (e.g., player points)

## Installation & Setup

## Prerequisites
- Node.js (v16+ recommended)
- MongoDB Atlas account

## 📥 Installation & Setup
### Step 1️⃣ Clone the Repository
```sh
git clone https://github.com/IshanHansaka/SpiritX_TetraBytes_02.git
cd SpiritX_TetraBytes_02
```

### Step 2️⃣: Setup and Install Dependencies
#### 2.1 Backend Setup:
```
npm install
npm run dev
```
- The backend will be running on **http://localhost:5002**

#### 2.2 Frontend  Setup:
```
cd client
npm install
npm run dev
```
- The frontend will be available at **http://localhost:3000**

### Step 3️⃣: Configure Environment Variables
#### 3.1 add .env
```
PORT=5002
MONGO_URI="MONGODB_URI=mongodb+srv://ishanhansakasilva:e2moNJJWuBfxjuL8@systemdb.avehz.mongodb.net/?retryWrites=true&w=majority&appName=SystemDB"
JWT_SECRET="=YouAreTheBest123"

```

