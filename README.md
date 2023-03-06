SOUGHT OF HIDDEN

Can acces live version at: 
    -star-tagging.web.app 
    -star-tagging.firebaseapp.com

Its a photo tagging app. in othe words, it like Where's Waldo.
There is a large image with bunch of characters and distractions in general, the goal is tot find three specific characters in the image. Who this characters are can be seen when clicking the bubble counter in the navbar. There are three diferent maps with three unique characters. the source of these images can be found below:

    - Heaven and Hell by Hugo Prades (https://www.reddit.com/r/wimmelbilder/comments/98ohac/heaven_and_hell_by_hugo_prades/)
    - DC Vs Vampires #12 Variant by Filya Bratukhin (https://www.reddit.com/r/wimmelbilder/comments/zs087v/dc_vs_vampires_12_variant_by_filya_bratukhin/)
    - Poster for White Noise. New movie from Noah Baumbach with Adam Driver and Greta Gerwig. By Marija Tiurina. (https://www.reddit.com/r/wimmelbilder/comments/z2paql/poster_for_white_noise_new_movie_from_noah/)

To achieve this I used the React.js and Styled-Component on the front end. For the backend Firebase was used. 

The time it takes to find the characters is kept track of by the state the of the Map. 

For validation of the clicking the correct location, we request the coordinates from the backend and compare them to the click lcoation. The coordinares are not stored anywhere in the fron-end. 

Additionally, a leaderboard was added. Once a name is submitted (there is only a js validation that only does not allow blank spaces) the time (as seconds value) is stored to firesstore as a map alognside the name that was entered. Idmediatley after the Leaderboard component will render which gets the leaderboard data from firebase, takes the top ten lowest times, and displays the them alkongside their ranking, name, and time.


