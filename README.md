# dotfiles
My ever-so-handy dotfiles

## Fresh setup (MacOS)

1. Open up Terminal
2. Install `homebrew`
3. Generate a new SSH key and save it to GitHub, GitLab (also store it for ssh-agent)
```
$ ssh-keygen -t rsa -b 4096 -C "andreas@currentdomain.com" && ssh-add ~/.ssh/id_rsa
```
4. Tap into `cask` via `brew tap homebrew/cask-cask` (Not needed anymore? Might be bundled with `homebrew`)
5. Brew 'em up! `brew cask install iterm2 slate fliqlo tmux visual-studio-code sublime-text 1clipboard`
6. `mkdir ~/code`
7. Clone this repo into `~/code`
```
$ cd code && git clone git@github.com:andreasvirkus/dotfiles.git
```
8. Symlink config files
```
$ ln -s ~/code/dotfiles/slate/.slate.js ~/.slate.js
$ ln -s ~/code/dotfiles/.bashrc ~/.bashrc
$ ln -s ~/code/dotfiles/.bash_aliases ~/.bash_aliases
$ ln -s ~/code/dotfiles/.vimrc ~/.vimrc
$ ln -s ~/code/dotfiles/.tmux.conf ~/.tmux.conf
```
9. Update bash to v5
```
brew install bash
# Add the new shell to the list of allowed shells
sudo bash -c 'echo /usr/local/bin/bash >> /etc/shells'
# Change to the new shell
chsh -s /usr/local/bin/bash
# And now restart iTerm
```
10. Configure iTerm2 to use the profile file from this repo
```
cp iterm/com.googlecode.iterm2.plist ~/Library/Preferences
```
11. Configure ~Sublime plugins~ VSCode extensions & themes
12. Configure tmux & vim config files and plugins
13. Install Kap, Spotify, Firefox Developer Edition, Chrome, Karabiner Elements, Slack, Discord, Tuple
14. Turn on FileVault from `System Preferences > Security & Privacy`
15. Configure automatic wallpaper change from `System Preferences > Desktop & Screen Saver` &
then add the `./change-wallpaper.scrpt` to Automator as a new Quick Action. Now add a keyboard
shortcut to it via `System Preferences > Keyboard > Shortcuts` and select `Services` from
the sidebar. Previously used `Cmd + Shift + 8` as the shortcut. Also configure the privacy 
settings for Automator & Finder; see more https://apple.stackexchange.com/a/276839/254680
**Note** - In order for Slate to work, enable it via `System Preferences > Security & Privacy > Privacy tab > Accessibility`

## Tweaks

- Keyboard
  - Disable spelling corrections, etc. in `System Preferences > Keyboard > Text`
  - Add `Estonian` as a keyboard layout
  - Remap Caps Lock to Ctrl
- Display
  - Set external display as primary by dragging the white bar ontop of the native display in `Arrangements` panel (I know you always forget)
  - Disable auto-dimming of displays
- Set default view settings in Finder via `Cmd+J` (list, sort by name, etc.)
- Add `Cmd + .` as `App shortcuts` for the command `Sleep` in `System Preferences > Keyboard > Shortcuts`
- Configure Dock (do not display recently opened applications + auto-hide)
- Make menu-bar auto-hide
- Configure Screenshots via the options menu by accessing it with `Cmd + Shift + 5` (disable the floating thumbnail and set `~/Pictures/screenshots` as the destination folder)
- Add margins to iTerm - https://imgur.com/a/k2WOf
- Run `echo 'source "$HOME/.bashrc"' >> ~/.bash_profile` so `tmux` would also source `.bashrc`
- Set up git auto-completion `brew install git bash-completion` (`.bashrc` takes care of the rest <3)
