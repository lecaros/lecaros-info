+++
title = 'About'
date = 2024-05-05T11:12:44-05:00
draft = false
identifier = 'about'
+++


Software Engineer with over 20 years of experience in the IT industry, currently working in Pipeline Support Engineering at Chronosphere. He has a background in development, support, and open source.

This site is a collection of thoughts, projects, and experiences. 


{{ range .Site.Data.credlybadges }}
<div class="badge">
    <img src="{{ .image }}" alt="{{ .name }}">
    <h2>{{ .name }}</h2>
    <p>{{ .description }}</p>
</div>
{{ end }}


{{ range first 3 .Site.Data.credlybadges }}

{{ $credly := . }}

{{ $image := (resources.Get .LocalImagePath).Resize "150x150" }}

<img
src="{{ $image.RelPermalink }}"
width="{{ $image.Width }}"
height="{{ $image.Height }}"
alt="{{ $credly.Description }}">
{{ end }}