
# StudyBuddy – Learning Platform (ASP.NET Core)

StudyBuddy is a simple educational web application where students can access courses, take quizzes, and generate reports or certificates.  
This project is built using **ASP.NET Core**, **SQL Server**, and **Entity Framework Core**, developed by a team of 5 students.


##  Features
- **Student Management** - User registration and profile management
- **Course Management** - Browse and enroll in courses
- **Quiz System** - Interactive quizzes with automatic scoring
- **Certificate Generation** - PDF certificates upon course completion
- **Authentication System** - Secure login/register with role-based access
- **AI Chat Assistant** - Learning support through OpenAI integration 



## Tech Stack
- **Backend**: ASP.NET Core 8 (Razor Pages)
- **Database**: SQL Server + Entity Framework Core
- **Authentication**: ASP.NET Core Identity
- **AI Integration**: OpenAI API
- **PDF Generation**: iTextSharp or QuestPDF
- **Frontend**: HTML, CSS, JavaScript, Bootstrap



## Project Structure
```markdown

STUDYBUDDY/ (Solution)
│
└── STUDYBUDDY/ (Main Project - ASP.NET Core Razor Pages)
    │
    ├── Properties/
    │   └── launchSettings.json
    │
    ├── wwwroot/
    │   ├── css/
    │   ├── js/
    │   └── images/
    │
    ├── Pages/
    │   ├── Shared/
    │   │   ├── _Layout.cshtml
    │   │   ├── _Navigation.cshtml
    │   │   └── _ValidationScriptsPartial.cshtml
    │   │
    │   ├── Index.cshtml
    │   │
    │   ├── Auth/                          ← Task 5
    │   │   ├── Login.cshtml
    │   │   └── Register.cshtml
    │   │
    │   ├── Student/                       ← Task 4
    │   │   ├── Dashboard.cshtml
    │   │   ├── Courses/
    │   │   │   └── Index.cshtml
    │   │   └── Certificates/
    │   │       └── Index.cshtml
    │   │
    │   ├── Courses/                       ← Task 2 + Task 4
    │   │   ├── Index.cshtml
    │   │   ├── Details.cshtml
    │   │   └── Manage/ (Admin only)
    │   │       ├── Index.cshtml
    │   │       ├── Create.cshtml
    │   │       └── Edit.cshtml
    │   │
    │   ├── Quizzes/                       ← Task 3 + Task 4
    │   │   ├── Index.cshtml
    │   │   ├── Take.cshtml
    │   │   ├── Results.cshtml
    │   │   └── Manage/ (Admin only)
    │   │       ├── Index.cshtml
    │   │       └── Create.cshtml
    │   │
    │   └── Chat/                          ← Task 5
    │       └── Index.cshtml
    │
    ├── Models/                            ← Task 1 + Task 2 + Task 3
    │   ├── Student.cs
    │   ├── Course.cs
    │   ├── Quiz.cs
    │   ├── Question.cs
    │   ├── QuizAttempt.cs
    │   └── Certificate.cs
    │
    ├── Data/                              ← Task 1
    │   ├── ApplicationDbContext.cs
    │   └── Migrations/
    │
    ├── Services/                          ← Task 2 + Task 3 + Task 5
    │   ├── CourseService.cs
    │   ├── QuizService.cs
    │   ├── CertificateService.cs
    │   └── ChatService.cs (AI Integration)
    │
    ├── Program.cs                         ← Task 5 (Auth setup)
    ├── appsettings.json
    └── README.md

```

## Getting Started

### Prerequisites
- .NET 8 SDK
- SQL Server (LocalDB or Express)
- Visual Studio 2022 or VS Code

### 1. Clone the project
```bash
git clone <repo-url>
````

### 2. Restore dependencies

```bash
dotnet restore
```

### 3. Setup local configuration

Create appsettings.Development.json with your database connection:

```
### 4. Apply migrations

```bash
dotnet ef database update
```

### 5. Run the application

```bash
dotnet run
```

---

## Git Workflow

```
main → stable code  
dev  → development  
feature/* → individual branches
```

Example:

```bash
# Create feature branch from dev
git checkout dev
git checkout -b feature/student-module

# After development
git add .
git commit -m "Add student registration functionality"
git push origin feature/student-module

# Create Pull Request to develop branch
```
Team Sync Commands
```bash
# Get latest changes
git pull origin dev

# Switch to your feature branch
git checkout feature/your-module
```

---

## 👥 Team Members & Responsibilities

Our team of 5 developers is working on the following modules:

### 🗃️ Database & Infrastructure
- Create tables and relationships using SSMS
- Manage Entity Framework migrations
- Deploy database to Azure or shared SQL instance
- Implement stored procedures (optional)

### 🔧 Backend - Students & Courses
- Students CRUD API endpoints
- Courses CRUD API endpoints  
- Data validation and business logic
- Services layer and repository pattern

### 📊 Backend - Quizzes & Reports
- Quiz creation and management API
- Quiz results processing and scoring
- PDF certificate generation
- Report generation system

### 🎨 Frontend & UI (Razor Pages)
- Dashboard design and layout
- Navigation system and user experience
- Student interface components
- Course browsing and management pages
- Quiz taking interface

### 🔐 Authentication & Integration
- Login/Register with ASP.NET Core Identity
- Role-based authorization (Student/Admin)
- Route protection and security
- AI Chatbot API integration
- Deployment to cloud platform (Azure/Railway)
```
