# Owtrack-cli
![Screenshot 1](https://raw.githubusercontent.com/gasech/owtrack-cli/main/assets/screenshot.png)
A CLI application that allows you to track your Overwatch 2 matches, see your statistics and more...

## Features
- Save your matches locally
- Add party to your matches
- See your statistics (Best heroes, maps and role)
- Delete matches by id 

## Developing
This app was built with node `v20.3.1` and npm `v9.6.7`, if something isn't working correctly, it's probably related to this.

```bash
git clone https://github.com/gasech/owtrack-cli.git
cd owtrack-cli
npm i
npm start
```

## Testing
First delete all of your cached data before testing. It's an inconvenience but necessary for now. Then run `npm test`

## TODO
- [ ] Add Windows support (important)
- [ ] Add MacOS support
- [ ] Stats should ignore matches with exceptions (Leaver or thrower in both teams)
- [ ] Improve UI and data display
- [ ] Add leaver/thrower ratio

## Credits
This project is heavily inspired by [Competiwatch](https://github.com/cheshire137/competiwatch-desktop/)
