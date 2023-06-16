<p align="center">
  <img src="https://i.imgur.com/oWZadY7.png">
</p>
<h1 align="center">
  MyTeam
</h1>

MyTeam is a visual dashboard of your football team's stats in a specified season. My Team <ins><b>uses an APISports key</b></ins> to update data in real time, you can get one by navigating to the "my access" tab on your profile after creating an APISports account here: <ins><b>[GET API KEY](https://dashboard.api-football.com/login)</b></ins>.  
APISports allows free users to use the key 100 times per day, that's more than enough, but you can always upgrade the service if you want to.

<p align="center"><b>🚧 MyTeam is under development 🚧</b></p>
<br/>

<h2 align="center">
  About
</h2>

### Features & Info
⚛️ Developed using **React.js** and **TypeScript**.  
#️⃣ **Key authentication** and validation.  
#️⃣ **Responsive design** for every mobile or desktop device.  
(The data chart is rendered in a canvas, so when testing, it requires refreshing for its responsive layout to be displayed correctly.)  
✅ **Real-time** data fetching and revalidation.  
✅ **Chart data visualization** of your team's **average goals per minute** in a game.  
✅ **Display** your team's **season** games, wins, losses, draws, most used formation, and each player's information.  
✅ **Track** your API key daily limit uses.  
(APISports might not update this information in real time).  

### Known issues being solved
🟥 APISports allows for 100 uses per day and 10 uses per minute. Suppose a user selects a team, navigates to the dashboard, and quickly switches to another team. In such cases, the team form may appear with empty fields (while still being marked as invalid) or information might be missing in the dashboard, due to the 10 uses per minute limitation. Unfortunately, this restriction cannot be modified for free accounts, and currently, there is no feedback message notifying the user when this error occurs in the team selection page. This issue does not affect the functionality or usability of the app and normally won't happen, but it does require the user to re-select the team or just wait a minute if so.  

### Features in the next update
🧰 10 uses per minute problem fixing.  
🔄 lazy loading for better experience.  
🚧 PWA and notifications.  
🚧 Future games callendar for your team.  
🚧 Multi-language support.  

<h2 align="center">
  Interface
</h2>

✨ You can find the UI design by clicking <ins><b>[HERE](https://www.figma.com/file/LjRNyD8ZrlZjwaE7oJB0GO/Meu-time?type=design&node-id=0%3A1&t=4B7bRXV7ZV1f5NbX-1)</b></ins>
### Screenshots
<p align="center">
  <img src="https://i.imgur.com/VSfoMOg.png">
</p>
<p align="center">
  <img src="https://i.imgur.com/a1tlQoB.png">
</p>
<p align="center">
  <img src="https://i.imgur.com/VuEbmyd.png">
</p>
<p align="center">
  <img src="https://i.imgur.com/y8AKYM4.png">
</p>
<p align="center">
  <img src="https://i.imgur.com/KmbQD49.png">
</p>

## Building

Remember to create an APISports account and copy your API key to use the app.  
You need [Node.js](https://nodejs.org/en) and [git](https://git-scm.com/downloads) installed on your computer in order to follow the steps bellow.  
To begin, launch a terminal at the desired folder location where you intend to clone the repository and run the commands:  
```
git clone https://github.com/Lukas-SE/MyTeam.git
cd MyTeam
npm i
npm run dev
```

It will run the app in development mode.<br/>