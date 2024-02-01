var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'GkIXQyk84cI', // video's ID
        playerVars: {
            'autoplay': 1,
            'mute': 1,
            // Hide the controls:
            'controls': 0, 
                // Start at 90 seconds:
            'start': 90,
            // Disable keyboard controls:
            'disablekb': 1, 
            // Hide the full-screen button:
            'fs': 0, 
            // Hide video annotations by default:
            'iv_load_policy': 3, 
            // Limit YouTube branding:
            'modestbranding': 1, 
            // Do not show related videos after yours ends:
            'rel': 0, 
                // Hide video info:
            'showinfo': 0,
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.mute(); // Mute the video
    event.target.playVideo(); // Play the video
}
