---
layout: post
title: How to Install and Use pyenv on macOS - A Complete Guide
date: 2024-11-06 00:19:00
description: Managing multiple Python versions on your Mac can be challenging. Enter pyenv - a fantastic tool that lets you switch between Python versions seamlessly. In this guide, I'll walk you through installing and using pyenv on macOS.

tags: python pyenv coding macOS
categories: coding-tool
featured: false
thumbnail: assets/img/post_images/pyenv.png
---

{% include figure.liquid loading="eager" path="assets/img/post_images/pyenv.png" class="img-fluid rounded z-depth-1" %}

Managing multiple Python versions on your Mac can be challenging. Enter pyenv - a fantastic tool that lets you switch between Python versions seamlessly. In this guide, I'll walk you through installing and using pyenv on macOS.

#### What is [pyenv](https://github.com/pyenv/pyenv)?

[pyenv](https://github.com/pyenv/pyenv) is a Python version management tool that allows you to:

- Install multiple Python versions
- Switch between them easily
- Set global and project-specific Python versions
- Manage virtual environments


#### Prerequisites

Before we begin, make sure you have:

- macOS
- Homebrew package manager
- Terminal access

#### Installation Steps

#### 1. Install Required Dependencies

First, install the required dependencies using Homebrew:

```bash
brew install openssl readline sqlite3 xz zlib
```

#### 2. Install pyenv

Install pyenv using Homebrew:

```bash
brew install pyenv
```

##### 3. Configure Your Shell

Add pyenv to your shell configuration. If you're using zsh (default in modern macOS), add these lines to your `~/.zshrc`:

```bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```

If you're using bash, add the same lines to `~/.bash_profile` or `~/.bashrc`.

Restart your terminal or reload your shell configuration:

```bash
source ~/.zshrc  # or source ~/.bash_profile for bash
```

#### Using pyenv

##### List Available Python Versions

To see all available Python versions:

```bash
pyenv install --list
```

#### Install a Python Version

To install a specific Python version:

```bash
pyenv install 3.9.7
```

##### List Installed Versions

View your installed Python versions:

```bash
pyenv versions
```

##### Set Global Python Version

Set a default Python version for your system:

```bash
pyenv global 3.9.7
```

##### Set Local Python Version

Set a Python version for a specific project directory:

```bash
cd your-project
pyenv local 3.8.12
```

##### Check Current Python Version

Verify your active Python version:

```bash
python --version
pyenv version
```

#### Working with Virtual Environments

pyenv works great with virtual environments. Here's how to use them:

##### Install pyenv-virtualenv

```bash
brew install pyenv-virtualenv
```

Add to your shell configuration:

```bash
echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.zshrc
```

##### Create a Virtual Environment

```bash
pyenv virtualenv 3.9.7 my-project-env
```

##### Activate/Deactivate Environment

```bash
# Activate
pyenv activate my-project-env
# Deactivate
pyenv deactivate
```

#### Common Issues and Solutions

##### 1. Python Build Fails

If you encounter build failures, ensure you have all required dependencies:

```bash
brew install openssl readline sqlite3 xz zlib
```

##### 2. Command Not Found

If pyenv commands aren't recognized, verify your shell configuration and restart your terminal.

### Best Practices

1. Always use virtual environments for projects
2. Keep your pyenv installation updated
3. Document Python versions in your projects
4. Use `.python-version` files for project-specific versions

### Conclusion

pyenv is an invaluable tool for Python development on macOS. It simplifies version management and helps maintain clean, isolated development environments. With this setup, you can easily switch between Python versions and manage project-specific environments.

Remember to periodically update pyenv and your Python versions to ensure you have the latest features and security updates.

Happy coding! 🐍✨

------

*This guide was last updated: 06 November, 2024*