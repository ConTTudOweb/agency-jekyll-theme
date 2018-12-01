# Communicare Treinamentos


## How to develop?

1. Clone the repository;
2. Create a virtualenv;
3. Activate virtualenv;  
  a. Install the Ruby and dependencies
4. Run server;

```console
git clone https://github.com/ConTTudOweb/communicaretreinamentos.git
cd communicaretreinamentos
python -m venv .venv
source .venv/bin/activate
  sudo apt-get install ruby ruby-dev build-essential
  echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
  echo 'export GEM_HOME=$HOME/gems' >> ~/.bashrc
  echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.bashrc
  source ~/.bashrc
  gem install jekyll bundler
  bundle install
bundle exec jekyll serve
```