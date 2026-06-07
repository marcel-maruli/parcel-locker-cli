# Parcel Locker Management System

A robust and modular Command Line Interface (CLI) application for managing parcel lockers, user sessions, and waiting queues. This system is designed with professional software engineering principles, featuring a decoupled architecture, centralized state management, and comprehensive error handling.

## 🚀 Features

- **Session Management:** Secure login and logout functionality.
- **Locker Operations:** Reserve, release, and monitor locker status.
- **Queue System:** Manage user waitlists for specific lockers.
- **Admin Controls:** Register new lockers with authorization checks.
- **Developer-Friendly:** Path aliasing, unit testing support, and robust command routing.

## 🛠 Tech Stack

- **Language:** Node.js + TypeScript
- **CLI Interface:** `readline`
- **Testing:** Jest + ts-jest

## 📂 Project Structure

```text
src/
├── commands/       # Command routing and logic
├── services/       # Business logic (Locker, Queue, User)
├── utils/          # Helper functions (Fuzzy matching, etc.)
├── store.ts        # Centralized state management
└── app.ts          # CLI entry point
```

## ⚙️ Installation

### 1. Clone the repository:

```bash
git clone https://github.com/marcel-maruli/parcel-locker-cli.git
cd parcel-locker-cli
```

### 2. Install the dependencies:

```bash
npm install
```

### 3. Run the application:

```bash
npm run start
```

## 🧪 Testing

### 1. Install the dependencies:

```bash
npm test
```

## 💡 Usage

Once the application is running, type "help" to see the full list of available commands:

```text
- login <name>: Start your session.

- reserve <id>: Secure a locker.

- release <id>: Free a locker.

- status: Check your locker assignments and queue positions.

- Built with professional software engineering standards.
```
