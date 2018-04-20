###
# Aliases
###

# General
alias c='clear'
alias x='exit'

# LS
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'

# Add an "alert" alias for long running commands.  Usage:
#   sleep 10; alert
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

# CD
alias ..='cd ..'
alias ...='cd ../../'
alias ....='cd ../../../'

# apt-get
alias supd='sudo apt-get update'
alias supg='sudo apt-get upgrade'
alias install='sudo apt-get install'
alias apt-search='sudo apt-cache search'

# Output commands
alias ll='ls -l'
alias l.='ls -d .* --color=auto'
alias j='jobs -l'
alias h='history'

# Colorize the grep command output
alias grep='grep --color=auto'
alias egrep='egrep --color=auto'

# Start calculator with math support
alias calc='bc -l'

# Ping and network
alias ping='ping -c 5'
alias fastping='ping -c 100 -s.2'
alias ports='netstat -tulanp'

# Git
alias rao='remote add origin'
alias acm='git add . && git commit -am'
alias gst='git status'
# Gets git status for immediate subdirs
alias gstdirs='find . -maxdepth 1 -mindepth 1 -type d -exec sh -c '(echo {} && cd {} && git status -s && echo)' \;'
alias gd='git diff'
alias gdc='git diff --cached'
alias gco='git checkout'
alias pushitgood='push -u origin --all'
alias gbranches='git fetch --prune --all'
alias gundo='git reset --soft HEAD~1'
alias cm='git commit -m'
alias cam='git commit -a -m'
alias ca='git commit -a --verbose'

# IDE
alias c.='code .'

# npm workflow
alias dev='npm run dev'
alias strt='npm start'

# Vagrant
alias vup='vagrant up && vagrant ssh'
alias vsleep='vagrant suspend'
alias vhalt='vagrant halt'
alias vstat='vagrant status'
alias vrld='vagrant reload && vagrant ssh'
alias vssh='vagrant ssh'

# Docker
alias dlogin='dbash '
alias dup='docker-compose up -d && dlogin '
alias dkill='docker-compose kill'
alias drmall='docker rm $(docker ps -aq)'
alias dlist='docker ps -a'

# Bash into running container
dbash() { docker exec -it $(docker ps -aqf "name=$1") bash; }
