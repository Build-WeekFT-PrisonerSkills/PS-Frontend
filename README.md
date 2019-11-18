# Second Chance 💯 ✔️ 🏆 (Front End Code Base)

## Table of Contents

- **[React Developer 1](#junior-react-developers)**<br>
- **[React Developer 2](#senior-react-developer)**<br>
- **[Product Vision Document](#second-chance)**<br>
- **[Proposal](#proposal)**<br>
- **[UX Design](#ux-design)**<br>
- **[Frameworks and Libraries Used](#frameworks-and-libraries)**<br>
- **[Target Audience](#target-audience)**<br>
- **[Research](#research)**<br>
- **[Prototype Key Features](#prototype-key-features)**<br>
- **[Credits](#credits)**<br>

## <a name='overview'></a>Overview
This frontend code base allows users to navigate Second Chance's web platform. Employers can view available prisons and their inmates as well as their information to find potential employees for their business. Career Coaches from various prisons can register and login to utilize Second Chance's web platform to host their prison on the website for employer/business owner viewing to assist the prison inmates in transitioning to civilian life. 

## Junior React Developers
Applied JavaScript | Intro-to-React| Single Page Application | TeamWork Capabilities | Form Managment
| --------------------- | ---------------------- | --------------------- | -------------------- | ------------ |
Utilized Styled Components to style web app. Array methods were used to dynamically render HTML elements | Created dynamic functional components and showcased proper usage of state and props with small reusable components. Usage of webHooks to manage state. | Used Axios to perform GET HTTP requests to database for list of events.  | Pair Programmed with React 2 Dev and Back End Architect to deliver top notch web platform | Utilized third party library Formik to create user friendly forms.

## Senior React Developer
React Application | HTTP/AJAX | Sate Management | TeamWork Capabilities |
| --------------------- | ---------------------- | --------------------- | -------------------- |
App was set up in a manner that is conducive to a team project environment. Project is organized well on GitHub. | CRUD operations drove the application. Token authentication handeled correctly. HTTP requests handled logically in was cohesive with app's state management system. | Managed state in a very coherent system at all levels of the app - global state management, component tree state management, and individual component management. The system is easy to understand and use. Architected it in such a way that it is reusable for a lot of the state management needs of the app.  | Extra considerations were made to help all team members understand how to contribute easily to the project, no matter their role. |

---

# Product Vision Document :tada:

## Second Chance
Own a business? Want to do good in the world? Look no further! "Second Chance" is an intuitive web platform that allows you to look into different prison demographics near you and analyze the different individual resumes and skill sets as potential employees for your business. Some inmates may have permissions to work away from prison and others may be close to transitioning back into civilian life and may even come a permanent asset to your team if you wish it to be! 

#### Minimal Viable Product (MVP)
- This app contains two user types. A career coach (aka prison admin) who has the ability to log in and an employer who has no need to log in or have user data persist in app who can view prison data and prison employee data for potential hiring. 
- **Landing Page**: Has a nav bar with title: "Second Chance", and a login and register button for career coaches to manage prison data. Landing page also contains two other buttons or cards: one for career coaches to use to reach same functionality to manage prison data, and another for employers to view prison data. Career coaches are required to register and log in to edit data. <br>
-- *Pages for Potential Employers*
- **Prison Listing Page**: After clicking on the "for employers" button, no need to log in. Contains a list of prisons who have posted employee (aka prisoner) profiles. Each prison is laid out in a grid format, with the name of the prison, number of people available to work (total number of entries a given career coach has submitted), and the physical address/location of the prison. Clicking on a prison card takes you to the employee (aka prisoner) profile listing page.
- **Employee Listing Page**: After clicking on the prison card, non-logged in users can view the list of employee profiles associated with that prison.
- **Single Employee Page**: After clicking on a single employee card, users can read more about a single employee (prisoner) list of resume and job skills. <br>
-- *Pages for Career Coaches (aka Prison Admins)*
- **Register Page**
- **Login Page**
- **Create a Prison Page**: Career Coach led to this page if no profile is created yet. After creation, Prison is added to list of prison page for employer view. Assuming Prison Profile is already created, and Career Coach is logged in, they are directed to Career Coach Dashboard Page.
- **Career Coach Dashboard Page**: where career coach can see employees created by them for their particular prison in an employee list view, and have options to create, delete and otherwise edit them.
- **Create an Employee Page**. Should include name, availability (permissions to work in prison only or able to have work leave), and list of skills and/or previous work experience. The profile can be edited and deleted after creation.
- **Navigation** - Navigation is present on all pages, Users should know what page is active by clicking on a nav link and activating their tab. 

#### Stretch Goals (Keep in mind this project has to be accomplished in one week)
- A single user could search for prisons by entering their zip code and defining a search radius. An admin can upload a pdf of a prisoner’s resume.

#### Proposal
- What problem does your app solve?
  * Help fix the prison system by rehabilitating prison inmates. Fight prejudice and profiling in the social system and also helps employers find valuable employees after prisoners transition to civilian life.

- Be as specific as possible; how does your app solve the problem?
  * Creates a space where employers can offer career services for prison inmates looking to change their lives. Allows business owners to find employees easily near them and to make a difference in their employees lives for the better by analyzing their resumes and skills. 
- What is the mission statement? 
  * Reconnect prisoners to civilian life and offer a them a second chance by assisting employers in the finding and hiring of prison inmates as employees both in prison and afterwards in their transition into civilian life.


#### Features
- What features are required for your minimum viable product?
  * Ability for employers to view prison and prisoner data.
  * A way for prison admin (career coaches) to register and log in and create and edit prison and prisoner data.
  * A way for employers to communicate interest in employees to career coaches for future hiring.

- What features may you wish to put in a future release?
*Zip code search... functionality to donate legal services to help prisoners clean their records and get better services for rehabilitation... 

#### What do the top 3 similar apps do for their users?
1. Couldn't really find anything like it. Government websites do provide info on what to do before hiring prison inmates and what benefits you could have: https://www.bop.gov/business/employing_former_inmates.jsp



#### UX Design
- What design system will you use?
  * Figma Tool to build out wire frames for design and user flow, color pallete etc.
  * Styled Components
  
###### What is the URL to your wireframes?
https://www.figma.com/file/yhmSmrIblvKqJcjEGITNVZ/PrisonSkills?node-id=0%3A1

  * Tool to pick with : Adobe Pallete Picker
  * Color palette choice: See figma...
  * Type system: TBD
  * Tool to reference: TBD
  * Typography choice: TBD
  * Icon system:


#### What will your user flow be?
- Landing Page -> Career coach button for career coach functionality, and employer button for employer view. 
- Career Coach flow will lead to registering/loggin in, creating a prison profile where career coach works and manages inmates, Then a dashboard page where career coach has the ability to view employees created, create, edit and delete inmate/employee profiles, log out, and go to other places. 
- Employer flow will lead to list of prisons where all prisons that career coaches have made will be listed. Employer can then click on a prison near them and view all inmates in a list (aka employees). An employer could then click on an employee and view their info and if interested continue to contact prison based on information. 

#### Frameworks and Libraries
- What 3rd party frameworks/libraries are you considering using?

**Frontend:**
- Axios
- Yup
- React
- React-router
- Formik
- Styled Components
- Redux

**Backend:**
- Bcryptjs
- Express
- Helmet
- Jsonwebtoken
- Knex
- Sqlite3

- Do APIs require you to contact its maintainer to gain access?
  * No

- Are you required to pay to use the API?
  * No

- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
  * N/A
  
#### Target Audience

- Who is your target audience? Be specific.
  * Business Owners looking to make a difference by hiring past prison inmates and get employees good for the jobs their hiring for.

- What feedback have you gotten from potential users?
  * Needs to be informative, needs to offer links to more information since this is full of potential worries for business owners.

- Have you validated the problem and your solution with your target audience? How?
  * There is not much else out there for this type of service. 

#### Research
_Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday._

**Research material:**
https://www.bop.gov/business/employing_former_inmates.jsp Website about hiring inmates, insurance you may be qualify for, etc.
https://www.unicor.gov/Inmate_Bonding.aspx more info on UNICOR bond available to business owners who want to hire past inmates.


#### Prototype Key Features
This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.

- App Landing Page (nav bar with login and register buttons, for employers card/link/button and for career coach card/link/button).
- List of Prisons (grid list of prisons as created by career coaches)
- List of Prisoners/Employees (grid list of employees/prisoners/inmates as created by career coaches)
- Employee Profile (all data needed about employee)
- Register (email, password, submit)
- Login (email, password, submit)
- Create a Prison (for first time login/register career coaches, contains prison name, address, city, state, zip, email, phone, agree to  terms and condtions button, and submit)
- Career Coach Dashboard (side menu visible along with list of career coaches created employees/inmates, menu houses functionaity for editing inmates (i.e. deleting, adding, editing), as well as viewing prison profile, view inmates created again, and logging out)
- Career Coach Profile (housing prison profile info mainly, not career coach info, contains prison name, address, # of employees, work programs etc)
- Edit Career Coach Profile (or edit prison profile page that career coach manages is more accurate)
- Add an inmate form (first name, last name, age, state, availability, work experience, image, terms and conditions, submit)
- Edit an inmate form (same as above only edit)


## Credits
### Project Manager
Justin Trombley https://github.com/JustinTrombley96 <br>

### User Interface
Maggie Price https://github.com/maggieprice <br>
Rick Ahlgren https://github.com/thericktastic <br>

### Frontend
Jackson Ogles (senior react dev): https://github.com/cjogles <br>
Walter Futch (junior react dev): https://github.com/WalterTheCodeGuy <br>
Sunil Karki (junior react dev): https://github.com/karkisunil1200 <br>

### Backend
Sean Naleid https://github.com/seanaleid <br>
Taylor Hunkler https://github.com/taylorhh5 <br>
