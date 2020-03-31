function updatemap()
{
console.log("Updating map with real time data")
fetch("/data.json")
.then(response => response.json())
.then(rsp => {
     //console.log(rsp.data) 
     rsp.data.forEach(element => {
         latitude=element.latitude;
         longitude=element.longitude;
        
        recovered=element.recovered;
        cases = element.infected;
        if (cases>500){
            color = "rgb(255,0, 0)";
        }
        //else{color = `rgb(${cases},0,0}`;}

        else{
            color = `rgb(${cases}, 0, 0)`;
        }

         // create the popup
         var popup = new mapboxgl.Popup({ offset:25 }).setText(
            `Cases:${cases} recovered:${recovered}`
            );

        // create DOM element for the marker
        var el = document.createElement('div');
         el.id = 'marker';
        
         // Mark on the map
        new mapboxgl.Marker({
            draggable: false,
            color: color
        }).setLngLat([longitude, latitude])
        .setPopup(popup) // sets a popup on this marker
        .addTo(map); 
     });  
})
}


updatemap()
//let interval = 20000;
//setInterval( updatemap, interval); 


