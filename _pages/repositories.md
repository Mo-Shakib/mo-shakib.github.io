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


  <img alt="Shakib's Github Stats" src="https://denvercoder1-github-readme-stats.vercel.app/api/?username=mo-shakib&show_icons=true&count_private=true&theme=dark&hide_border=true&bg_color=151515&title_color=f2f2f2&icon_color=79fe96" style="height: 192px;">
  <img alt="Shakib's Top Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=mo-shakib&langs_count=8&count_private=true&layout=compact&theme=dark&hide_border=true&hide=Jupyter%20notebook,less&bg_color=151515&title_color=f2f2f2&icon_color=79fe96" style="height: 192px;">

<details>	
  <summary><b>🔥 Github Streaks</b></summary><br>
  <p align="center">
  <a href="#"><img width="500px" src="https://github-readme-streak-stats.herokuapp.com/?user=mo-shakib&hide_border=true&theme=dark"></a></p>
</details>


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

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
