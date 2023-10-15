# SOUGHT OF HIDDEN

Its a photo tagging app. in othe words, it like Where's Waldo.
There is a large image with bunch of characters and distractions in general, the goal is tot find three specific characters in the image. Who this characters are can be seen when clicking the bubble counter in the navbar. There are three diferent maps with three unique characters.

<h2>Live Versions </h2>
    <ul>
        <li><a href="https://star-tagging.web.app">star-tagging.web.app</a></li>
        <li><a href="https://star-tagging.firebaseapp.com">star-tagging.firebaseapp.com</a></li>
    </ul>

<h2>Preview</h2>
    <h3>Map Selection</h3>
    <img width="1440" alt="Screen Shot 2023-10-15 at 6 55 50 PM" src="https://github.com/fmendezr/photo-tagging-app/assets/109354068/dd7ab4ee-f9ab-443e-8b50-9e3203f83ee7">
    <h3>Character Dropdown</h3>
    <img width="1440" alt="Screen Shot 2023-10-15 at 6 56 01 PM" src="https://github.com/fmendezr/photo-tagging-app/assets/109354068/c273fa95-78dc-478a-a1da-f92e6334c6ac">
    <h3>Character Selection</h3>
    <img width="1440" alt="Screen Shot 2023-10-15 at 6 56 31 PM" src="https://github.com/fmendezr/photo-tagging-app/assets/109354068/3047bced-4372-47b8-b33a-cd4e64138574">
    <h3>Found All Characters</h3>
    <img width="1440" alt="Screen Shot 2023-10-15 at 6 57 19 PM" src="https://github.com/fmendezr/photo-tagging-app/assets/109354068/681edae4-f76d-4396-acf0-30d6c254e4f5">
    <h3>Leaderboard</h3>
    <img width="1440" alt="Screen Shot 2023-10-15 at 6 57 30 PM" src="https://github.com/fmendezr/photo-tagging-app/assets/109354068/0f4398dd-bde8-49ae-8d4c-093f2714e96a">

<H2>Source of Images</H2>

    - Heaven and Hell by Hugo Prades (https://www.reddit.com/r/wimmelbilder/comments/98ohac/heaven_and_hell_by_hugo_prades/)
    - DC Vs Vampires #12 Variant by Filya Bratukhin (https://www.reddit.com/r/wimmelbilder/comments/zs087v/dc_vs_vampires_12_variant_by_filya_bratukhin/)
    - Poster for White Noise. New movie from Noah Baumbach with Adam Driver and Greta Gerwig. By Marija Tiurina. (https://www.reddit.com/r/wimmelbilder/comments/z2paql/poster_for_white_noise_new_movie_from_noah/)

<h2>Development</h2>

To achieve this I used the React.js and Styled-Component on the front end. For the backend Firebase was used. 

The time it takes to find the characters is kept track of by the state the of the Map. 

For validation of the clicking the correct location, we request the coordinates from the backend and compare them to the click lcoation. The coordinares are not stored anywhere in the fron-end. 

Additionally, a leaderboard was added. Once a name is submitted (there is only a js validation that only does not allow blank spaces) the time (as seconds value) is stored to firesstore as a map alognside the name that was entered. Idmediatley after the Leaderboard component will render which gets the leaderboard data from firebase, takes the top ten lowest times, and displays the them alkongside their ranking, name, and time.


