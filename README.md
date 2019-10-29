# dotfiles
My ever-so-handy dotfiles

## Fresh setup (MacOS)

1. Open up Terminal
2. Install `homebrew`
3. Tap into `cask` via `brew tap  caskroom/cask`
4. Brew 'em up! `brew cask install iterm2 slate fliqlo tmux sublime-text 1clipboard`
4. Generate a new SSH key and save it to GitHub, GitLab
```
$ ssh-keygen -t rsa -b 4096 -C "andreas@currentdomain.com"
```
5. `mkdir ~/code`
5. Clone this repo into `~/code`
```
$ cd code && git clone git@github.com:andreasvirkus/dotfiles.git
```
6. Symlink config files
```
$ ln -s ~/code/dotfiles/slate/.slate.js ~/.slate.js
$ ln -s ~/code/dotfiles/.bashrc ~/.bashrc
$ ln -s ~/code/dotfiles/.bash_aliases ~/.bash_aliases
$ ln -s ~/code/dotfiles/.vimrc ~/.vimrc
$ ln -s ~/code/dotfiles/.tmux.conf ~/.tmux.conf
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
13. Configure automatic wallpaper change from `System Preferences > Desktop & Screen Saver` &
then add the `./change-wallpaper.scrpt` to Automator as a new Quick Action. Now add a keyboard
shortcut to it via `System Preferences > Keyboard > Shortcuts` and select `Services` from
the sidebar. Previously used `Cmd + Shift + 8` as the shortcut. Also configure the privacy 
settings for Automator & Finder; see more https://apple.stackexchange.com/a/276839/254680
**Note** - In order for Slate to work, enable it via `System Preferences > Security & Privacy > Privacy tab > Accessibility`

## Tweaks

- Disable spelling corrections, etc. in `System Preferences > Keyboard`
- Add `Estonian` as a keyboard layout
- Disable auto-dimming of displays
- Set default view settings in Finder via `Cmd+J` (list, sort by name, etc.)
- Add `Cmd + .` as `App shortcuts` for the command `Sleep` in `System Preferences > Keyboard > Shortcuts`
- Configure Dock (do not display recently opened applications)
- Configure Screenshots via the options menu by accessing it with `Cmd + Shift + 5` (disable the floating thumbnail and set `~/Pictures/screenshots` as the destination folder)
- Add margins to iTerm - https://imgur.com/a/k2WOf
- Run `echo 'source "$HOME/.bashrc"' >> ~/.bash_profile` so `tmux` would also source `.bashrc`
- Set up git auto-completion `brew install git bash-completion` (`.bashrc` takes care of the rest <3)
