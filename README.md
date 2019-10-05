# dotfiles
My ever-so-handy dotfiles

## Fresh setup (MacOS)

1. Open up Terminal
2. Install `homebrew` 
3. Tap into `cask` via `brew tap  caskroom/cask`
4. Brew 'em up! `brew cask install iterm2 slate fliqlo tmux sublime-text 1clipboard`
4. Generate a new SSH key and save it to GitHub, GitLab
5. `mkdir ~/code`
5. Clone this repo into `~/code`
6. Copy the necessary config files to their homes
```
cp slate/.slate.js ~/
cp .bash* ~/
```
7. Update bash to v5 
```
brew install bash
# Add the new shell to the list of allowed shells
sudo bash -c 'echo /usr/local/bin/bash >> /etc/shells'
# Change to the new shell
chsh -s /usr/local/bin/bash
# And now restart iTerm
```
8. Configure iTerm2 to use the profile file from this repo
```
cp iterm/com.googlecode.iterm2.plist ~/Library/Preferences
```
9. Configure Sublime plugins & themes
10. Configure tmux & vim config files and plugins
11. Install Kap, Spotify, Firefox
12. Turn on FileVault from `System Preferences > Security & Privacy`

**Note** - In order for Slate to work, enable it via `System Preferences > Security & Privacy > Privacy tab > Accessibility`

## Tweaks

- Disable spelling corrections, etc. in `System Preferences > Keyboard`
- Add `Estonian` as a keyboard layout
- Disable auto-dimming of displays
- Set default view settings in Finder via `Cmd+J` (list, sort by name, etc.)
- Add `Cmd + .` as `App shortcuts` for the command `Sleep` in `System Preferences > Keyboard > Shortcuts`
- Configure Dock (do not display recently opened applications)
- Configure Screenshots via the options menu by accessing it with `Cmd + Shift + 5` (disable the floating thumbnail and set `~/Pictures/screenshots` as the destination folder)
