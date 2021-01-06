# dotfiles
My ever-so-handy dotfiles

## Fresh setup (MacOS)

1. Open up Terminal
2. Install `homebrew`
3. Generate a new SSH key and save it to GitHub, GitLab (also store it for ssh-agent)
```
$ ssh-keygen -t rsa -b 4096 -C "andreas@currentdomain.com" && ssh-add ~/.ssh/id_rsa
```
4. Tap into `cask` via `brew tap homebrew/cask-cask homebrew/cask-fonts`
5. Brew 'em up!
  - `brew install git bash-completion direnv deno node yarn docker docker-machine kubectl`
  - `brew install --cask iterm2 fliqlo visual-studio-code kap rectangle spotify slack discord google-chrome font-fira-code`
  - To brew `go` - https://ahmadawais.com/install-go-lang-on-macos-with-homebrew/
  - Docker steps - https://gist.github.com/andreasvirkus/0c4346c7d658783c75034cafcd67d935
6. `mkdir ~/code`
7. Clone this repo into `~/code`
```
$ cd code && git clone git@github.com:andreasvirkus/dotfiles.git
```
8. Symlink config files
```
$ ln -s ~/code/dotfiles/slate/.slate.js ~/.slate.js
$ ln -s ~/code/dotfiles/.bashrc ~/.profile
$ ln -s ~/code/dotfiles/.bash_aliases ~/.bash_aliases
$ ln -s ~/code/dotfiles/.vimrc ~/.vimrc

# Setup iTerm2 profile http://stratus3d.com/blog/2015/02/28/sync-iterm2-profile-with-dotfiles-repository/
# Specify the preferences directory
$ defaults write com.googlecode.iterm2.plist PrefsCustomFolder -string "~/dotfiles/iterm2"
# Tell iTerm2 to use the custom preferences in the directory
$ defaults write com.googlecode.iterm2.plist LoadPrefsFromCustomFolder -bool true
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
10. Silence the "Last login" messages of MOTD (`touch ~/.hushlogin`)
11. Configure [VSCode extensions & themes](./vscode) & install [Fira code](https://github.com/tonsky/FiraCode)
12. Turn on FileVault from `System Preferences > Security & Privacy`
13. Install Firefox Developer Edition, Karabiner Elements, Tuple
14. Install LastPass and 1Password, etc. on both browsers
15. Configure Fliqlo
16. Create automatic wallpaper change Applescript (`./change-wallpaper.scrpt`) via Automator. Also configure the privacy
settings for Automator & Finder; see more https://apple.stackexchange.com/a/276839/254680
16. In order for Slate to work, enable it via `System Preferences > Security & Privacy > Privacy tab > Accessibility`

## Tweaks

- Keyboard
  - Disable spelling corrections, etc. in `System Preferences > Keyboard > Text`
  - Add `Estonian` as a keyboard layout
  - Remap Caps Lock to Ctrl
- Display
  - Set external display as primary by dragging the white bar ontop of the native display in `Arrangements` panel (I know you always forget)
  - Disable auto-dimming of displays
- Set default view settings in Finder via `Cmd+J` (list, sort by name, etc.)
- Add `Cmd + .` as `App shortcuts` for the command `Lock Screen` in `System Preferences > Keyboard > Shortcuts` ([details](https://apple.stackexchange.com/a/336408/254680))
- Configure Dock (do not display recently opened applications + auto-hide)
- Make menu-bar auto-hide
- Configure Screenshots via the options menu by accessing it with `Cmd + Shift + 5` (disable the floating thumbnail and set `~/Pictures/screenshots` as the destination folder)
- Add margins to iTerm - https://imgur.com/a/k2WOf
- Run `echo 'source "$HOME/.bashrc"' >> ~/.bash_profile` so `tmux` would also source `.bashrc`
- Pimp that iTerm
  - Minimal style: https://www.felixjung.io/posts/pretty-iterm2-with-a-modern-titlebar
  - Get themes from https://iterm2colorschemes.com/
- Disable "auto-organize workspaces" from `System Preferences > Mission Control`
- Disable most of Spotlight's search categories (remember to `touch /Applications/Xcode.app` to see the `Developer` checkbox)
