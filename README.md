# OWTRACK-CLI
![Screenshot 1](https://raw.githubusercontent.com/gasech/owtrack-cli/main/assets/screenshot.png)
A CLI application that allows you to track your Overwatch 2 matches, see your statistics and more...

## Features
- Integrated with Google Sheets
- Create, read and delete matches 
- Add party to your matches
- See your statistics (Best heroes, maps and role)

## Developing
This app was built with node v20+ if something isn't working correctly, it's probably related to this.

```bash
git clone https://github.com/gasech/owtrack-cli.git
cd owtrack-cli
npm i
```

### Integrating with your Google Sheets
First, create an account in Google Cloud Developer, then you have to create an application so you can make requests to 
the Google Sheets API, theres a ton of tutorials on how to do that, by the end of it you should have a .json file with 
your secrets, rename it to `secrets.json` then paste it to the root of the project.

Create your `.env` file then paste this and paste your sheets ID (make sure your sheet is public or your API account have
access to it).

```
GOOGLE_APPLICATION_CREDENTIALS=./secrets.json
SPREADSHEET_ID=[REPLACE THIS WITH YOUR SHEETS ID]
```

### Running the app
```bash
npm start
```

## Testing
First delete all of your cached data before testing. It's an inconvenience but necessary for now. Then run `npm test`

## TODO
- [x] Google Sheets integration
- [ ] Stats should ignore matches with exceptions (Leaver or thrower in both teams)
- [ ] Add leaver/thrower ratio

## Credits
This project is heavily inspired by [Competiwatch](https://github.com/cheshire137/competiwatch-desktop/)
