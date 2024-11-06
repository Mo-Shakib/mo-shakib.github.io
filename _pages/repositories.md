---
layout: page
permalink: /repositories/
title: repositories
description: My public GitHub repositories.
nav: true
nav_order: 4
---

{% if site.data.repositories.github_users %}

#### 💻 GitHub Stats
  {% include figure.liquid loading="eager" path="https://raw.githubusercontent.com/Mo-Shakib/Mo-Shakib/1b58aa7a88367717d08ab652aa017a34eae44527/profile-3d-contrib/profile-night-rainbow.svg" class="img-fluid rounded z-depth-1" %}

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## My top public repositories:

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
