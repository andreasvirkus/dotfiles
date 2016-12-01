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
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(h$

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
alias ac='!git add . && git commit -am'
alias pushitgood='push -u origin --all'
alias undo-commit='reset --soft HEAD~1'
alias cm='commit -m'
alias cam='commit -a -m'
alias ca='commit -a --verbose'

# Vagrant
alias vup='vagrant up && vagrant ssh'
alias vsleep='vagrant suspend'
alias vhalt='vagrant halt'
alias vstat='vagrant status'
alias vrld='vagrant reload && vagrant ssh'
alias vssh='vagrant ssh'

# Docker
alias dlogin='dockerlogin '
alias dlogincms='dockerlogin cmsdocker_web_1'
alias dup='docker-compose up -d && dlogin '
alias dupcms='docker-compose up -d && dlogincms'
alias dkill='docker-compose kill'
alias drmcontainers='docker rm $(docker ps -aq)'
