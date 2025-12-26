# Architecture Overview

# Project Overview

This project is a simple eligibility-check web application built using Next.js (App Router).
The main goal was to keep the flow clear and predictable:

* User selects a state
* Checks eligibility rules
* Fills a form
* Submits data
* Admin can see submitted applications

# Project Structure

app/
 ├── page.tsx                  → Home (state selection)
 ├── state/
 │   └── [slug]/
 │       ├── page.tsx          → State details
 │       ├── apply/
 │       │   └── page.tsx      → Eligibility form
 │       └── success/
 │           └── page.tsx      → Success page
 ├── admin/
 │   └── page.tsx              → Admin submissions list

components/
 ├── FormInput.tsx             → Reusable input field
 ├── StateSelector.tsx         → Dropdown for state selection

data/
 ├── states.json               → Static state rules
 ├── submissions.json          → Stored form submissions

services/
 ├── eligibilityService.ts     → Handles form submission

lib/
 ├── fileStore.ts              → Read/write JSON file logic


# Data Flow Explanation

1. Home Page

* User selects a state from a dropdown
* Clicking Check Eligibility navigates to /state/[slug]

2. State Page

* State data is loaded from states.json
* Shows:
- State name
- Description
- Minimum age requirement
- User clicks Start Evaluation

3. Apply Page (Form)

* The state slug is read from the URL
* Matching state data is fetched from states.json
* ageRequirement is applied dynamically

* Form behavior:
* Submit button remains disabled until:

- All fields are filled
- Email format is valid
- Age meets state requirement
- Privacy policy is accepted
- If age is below the requirement, a clear message is shown
- Error disappears automatically once the user fixes the input

4. Submission Flow

Form Submit
   ↓
submitEligibility()
   ↓
fileStore.write(data)
   ↓
submissions.json updated
   ↓
Redirect to success page

5. Success Page

* Displays the user’s name from query params
* Shows the selected state name
* Confirms successful submission

6. Admin Page

* Reads data from the same submissions.json
* Displays a table of submitted applications

# Key Design Decisions

* File-based storage
- Chosen for simplicity and speed
- Easy to inspect and debug
- Works well for a demo or assignment

* No global state management
- Flow is linear and URL-driven
- Local component state is enough
- Avoided Redux / Context on purpose

* Inline styling
- Faster iteration
- Keeps UI logic close to components
- No dependency on external UI libraries


# What I Would Improve for Production

* Replace JSON file storage with a database
* Add proper authentication for the admin page
* Move submission logic to server actions or APIs
* Add server-side validation
* Improve accessibility and error handling
* Add rate limiting and security checks

# Trade-offs Made Due to Time

* Used JSON storage instead of a database
* Used inline styles instead of a design system
* Admin page has no authentication
* Minimal error handling (focused on main flow)