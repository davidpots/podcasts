---
date:          "2015-01-29"
podcast:       "American Football"
title:         "Radiolab"
summary:       "A fascinating look at the history of American football, focusing on the game's roots in the late 1800s. Topics include the newly formed Carlisle Indian School being an unlikely rival to the Ivy League incumbents; Pop Warner's entry as a pioneer of innovating strategy and tactics; how many of today's rules came to be. I would recommend this episode to anyone, whether they be a fan of the sport or not."
url-audio:     "http://audio.wnyc.org/radiolab/radiolab012915.mp3"
url-web:       "http://www.radiolab.org/story/football/"
---

{% assign podcast_data = site.data.podcasts | where:"title", page.podcast_title %}
{% assign podcast = podcast_data | first %}