+++
title = 'About'
date = 2024-05-05T11:12:44-05:00
draft = false
identifier = 'about'
+++


Software Engineer with over 20 years of experience in the IT industry, currently working in Pipeline Support Engineering at Chronosphere. He has a background in development, support, and open source.

This site is a collection of thoughts, projects, and experiences. 


// Iterate over our hugo optimized metadata file
{{ range first 3 .Site.Data.CredlyBadges }}
// give the current record a name for readability in the following <img>
{{ $credly := . }}
// let Hugo grab the image and resize it
{{ $image := (resources.Get .LocalImagePath).Resize "150x150" }}
// and simply render our bage as plain html image
<img
src="{{ $image.RelPermalink }}"
width="{{ $image.Width }}"
height="{{ $image.Height }}"
alt="{{ $credly.Description }}">
{{ end }}