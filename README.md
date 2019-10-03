# dotfiles
My ever-so-handy dotfiles

## Fresh setup (MacOS)

1. Open up Terminal
2. Install `homebrew` 
3. Tap into `cask` via `brew tap  caskroom/cask`
4. Brew 'em up! `brew cask install iterm2 slate fliqlo tmux sublime-text`
4. Generate a new SSH key and save it to GitHub, GitLab
5. `mkdir ~/code`
5. Clone this repo into `~/code`
6. Copy the necessary config files to their homes
```
cp slate/.slate.js ~/
cp .bash* ~/
```
7. Configure iTerm2 to use the profile file from this repo
8. Configure Sublime, tmux, vim plugins

**Note** - In order for Slate to work, enable it via `System Preferences > Security & Privacy > Privacy tab > Accessibility`
