# dotfiles
My ever-so-handy dotfiles

## Fresh setup (MacOS)

1. Open up Terminal
2. Install [homebrew](https://brew.sh)
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
3. Tap into `cask` via `brew tap homebrew/cask-cask && brew tap homebrew/cask-fonts`
4. Brew 'em up!
```
brew install git gh deno node yarn go kubectl ngrok jq
brew install --cask fliqlo visual-studio-code 1password zed brave-browser kap rectangle spotify slack docker discord google-cloud-sdk font-fira-code cron obsidian steam figma blender warp tableplus orbstack maccy
```
5. `mkdir -p ~/code/personal && mkdir ~/code/kanban && mkdir ~/notes`
6. `gh auth login` > HTTPS
7. Create basic code directories & clone this repo
```
cd code && gh repo clone andreasvirkus/dotfiles && cd dotfiles
cd ~/notes && gh repo clone andreasvirkus/notes
```
8. Symlink config files
```
ln -s ~/code/personal/dotfiles/.bashrc ~/.profile
ln -s ~/code/personal/dotfiles/.aliases ~/.aliases
ln -s ~/code/personal/dotfiles/.vimrc ~/.vimrc
```
9. Configure git
```
git config --global --add --bool push.autoSetupRemote true
git config --global user.name "andreasvirkus"
git config --global user.email "andreasvirkus@gmail.com"
```
10. Update bash to v5 (skip if fine with zsh)
```
brew install bash
# Add the new shell to the list of allowed shells
sudo bash -c 'echo /usr/local/bin/bash >> /etc/shells'
# Change to the new shell
chsh -s /usr/local/bin/bash
# And now restart iTerm
```
11.  Silence the "Last login" messages of MOTD (`touch ~/.hushlogin`)
12.  Configure [VSCode extensions & themes](./vscode) & install [Fira code](https://github.com/tonsky/FiraCode)
13.  Turn on FileVault from `System Preferences > Security & Privacy`
14.  Install 1Password, TabsCount extensions
15.  Configure Fliqlo
16.  Create automatic wallpaper change Applescript (`./change-wallpaper.scrpt`) via Automator. Also configure the privacy
settings for Automator & Finder; see more https://apple.stackexchange.com/a/276839/254680
17.  Configure Rectangle
18.  Configure git - https://blog.gitbutler.com/how-git-core-devs-configure-git/

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
- Run `echo 'source "$HOME/.bashrc"' >> ~/.bash_profile` so `tmux` would also source `.bashrc`
- Disable "auto-organize workspaces" from `System Preferences > Mission Control`
- Disable most of Spotlight's search categories (remember to `touch /Applications/Xcode.app` to see the `Developer` checkbox)
